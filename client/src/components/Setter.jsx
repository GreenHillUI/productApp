import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function setDefaultStyle(styles) {
  //console.log(styles);
  const result = styles.filter((style) => style['default?'] === true);
  return result;
}
//A component to simulate arbitrary user clicks on products

class Setter extends React.Component {
  componentDidMount() {
    const { setProductInfo, setStyles, setSelectedStyle, setMetaData, setProductQs } = this.props;

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

    const p_id = 40348;
    const config = { params: { product_id: p_id} };

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
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles: styles }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setMetaData: (data) => dispatch({ type: 'SETMETADATA', metaData: data }),
    setProductQs: (Qs) => dispatch({ type: 'SET_QUESTIONS', payload: Qs }),
  })
)(Setter);
export default SetterContainer;