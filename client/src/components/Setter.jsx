import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function setDefaultStyle(styles) {
  //console.log(styles);
  const result = styles.filter((style) => style['default?']);
  return result;
}
function getDefaultStyle(styles) {
  const result = styles.filter((style) => style['default?'])[0];
  return result || styles[0];
}
//A component to simulate arbitrary user clicks on products

class Setter extends React.Component {
  componentDidMount() {
    const {
      setProductInfo,
      setStyles,
      setSelectedStyle,
      setMetaData,
      setRelatedProducts,
      setProductQs,
      setReviews,
    } = this.props;

    axios.get('/products/40348')
      .then((response) => {
      //console.log(response.data);
        setProductInfo(response.data);
      })
      .catch(() => console.log(`Error loading product info`));

    axios.get('/products/40348/styles')
      .then((response) => {
        setStyles(response.data.results);
        setSelectedStyle(setDefaultStyle(response.data.results));
      })
      .catch((err) => console.log(err));

    axios.get('/reviews/meta', { params: { product_id: 40348 } })
      .then((response) => {
        setMetaData(response.data.ratings);
      })
      .catch((err) => console.log(err));

    axios.get('/reviews?product_id=40348')
      .then((response) => {
        setReviews(response.data.results);
      })
      .catch();

    axios.get('/products/40348/related')
      .then(({ data }) => {
        const uniqueIDs = data.filter((id, i) => data.indexOf(id) === i);

        const productRequests = [];
        uniqueIDs.forEach((id) => productRequests.push(
          axios.get(`/products/${id}`),
          axios.get(`/products/${id}/styles`),
          axios.get(`/reviews/meta/?product_id=${id}`),
        ));

        return Promise.all(productRequests);
      })
      .then((responses) => {
        const data = [];
        for (let i = 0; i < responses.length; i += 3) {
          data.push({
            info: responses[i].data,
            style: getDefaultStyle(responses[i + 1].data.results),
            reviews: responses[i + 2].data,
          });
        }
        return data;
      })
      .then((data) => {
        const products = [];

        for (let i = 0; i < data.length; i += 1) {
          const { info, style, reviews } = data[i];
          const productInfo = {
            id: info.id,
            img: style.photos[0].thumbnail_url,
            name: info.name,
            category: info.category,
            price: style.original_price,
            sale: style.sale_price,
            ratings: reviews.ratings,
          };
          products.push(productInfo);
        }

        setRelatedProducts(products);
      });

    const config = { params: { product_id: 40348, count: 20 } };

    axios.get('/qa/questions/', config)
      .then((res) => {
        setProductQs(res.data);
      })
      .catch((err) => { console.log(err); });
  }

  render() { return (null); }
}

const SetterContainer = connect(
  (state) => ({
    productInfo: state.productInfo,
    styles: state.styles,
    selectedStyle: state.selectedStyle,
    metaData: state.metaData
  }),

  (dispatch) => ({
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setMetaData: (data) => dispatch({ type: 'SETMETADATA', metaData: data }),
    setRelatedProducts: (products) => dispatch({ type: 'SETRELATEDPRODUCTS', products }),
    setProductQs: (Qs) => dispatch({ type: 'SET_QUESTIONS', payload: Qs }),
    setReviews: (reviews) => dispatch({ type: "SETREVIEWS", reviews }),
  })
)(Setter);
export default SetterContainer;
