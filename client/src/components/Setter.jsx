import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function setDefaultStyle(styles) {
  //console.log(styles);
  const result = styles.filter((style) => style['default?']);
  return result;
}

class Setter extends React.Component {
  componentDidMount() { }

  render() {
    const {
      productId,
      setProductInfo,
      setStyles,
      setSelectedStyle,
      setMetaData,
      setProductQs,
      setReviews,
      setMetaCharacteristics,
    } = this.props;

    axios.get(`/a/products/${productId}`)
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch(() => console.log('Error loading product info'));

    axios.get(`/a/products/${productId}/styles`)
      .then((response) => {
        setStyles(response.data.results);
        setSelectedStyle(setDefaultStyle(response.data.results));
      })
      .catch((err) => console.log(err));

    axios.get(`/a/reviews/${productId}/meta`)
      .then((response) => {
        setMetaData(response.data.ratings);
        setMetaCharacteristics(response.data.characteristics);
      })
      .catch((err) => console.log(err));

    axios.get(`/a/reviews/${productId}`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => console.error('help', err));

    axios.get(`/a/questions/${productId}?count=${100}`)
      .then((res) => {
        setProductQs(res.data);
      })
      .catch((err) => { console.log(err); });

    return null;
  }

}

const SetterContainer = connect(
  (state) => ({
    productId: state.productId,
  }),

  (dispatch) => ({
    setProductInfo: (info) => dispatch({ type: 'SETPRODUCTINFO', productInfo: info }),
    setStyles: (styles) => dispatch({ type: 'SETALLSTYLES', styles }),
    setSelectedStyle: (style) => dispatch({ type: 'SETSELECTEDSTYLE', selectedStyle: style }),
    setMetaData: (data) => dispatch({ type: 'SETMETADATA', metaData: data }),
    setProductQs: (Qs) => dispatch({ type: 'SET_QUESTIONS', payload: Qs }),
    setReviews: (reviews) => dispatch({ type: "SETREVIEWS", reviews }),
    setMetaCharacteristics: (characteristics) => dispatch({ type: "SETCHARACTERISTICS", characteristics }),
  })
)(Setter);
export default SetterContainer;
