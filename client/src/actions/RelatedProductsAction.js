import axios from 'axios';

function getDefaultStyle(styles) {
  const defaultStyle = styles.filter((style) => style['default?'])[0];
  return defaultStyle || styles[0];
}

// Atelier API data initialization
const init = (dispatch) => {
  axios.get('/a/products/40348/related')
    .then(({ data }) => {
      const uniqueIDs = data.filter((id, i) => data.indexOf(id) === i);

      const productRequests = [];
      uniqueIDs.forEach((id) => productRequests.push(
        axios.get(`/a/products/${id}`),
        axios.get(`/a/products/${id}/styles`),
        axios.get(`/a/reviews/meta/?product_id=${id}`),
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

      dispatch({ type: 'SETRELATEDPRODUCTS', products });
    })
    .catch((err) => console.error(err.message));
};

export default init;
