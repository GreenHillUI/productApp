import React from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

function setDefaultStyle(styles) {
  //console.log(styles);
  const result = styles.filter((style) => style['default?']);
  return result;
}

class Setter extends React.Component {
  componentDidMount() {
    const {
      setProductInfo,
      setStyles,
      setSelectedStyle,
      setMetaData,
      setProductQs,
      setReviews,
      setMetaCharacteristics,
    } = this.props;

    axios.get('/a/products/40348')
      .then((response) => {
        setProductInfo(response.data);
      })
      .catch(() => console.log(`Error loading product info`));

    axios.get('/a/products/40348/styles')
      .then((response) => {
        setStyles(response.data.results);
        setSelectedStyle(setDefaultStyle(response.data.results));
      })
      .catch((err) => console.log(err));

    axios.get('/a/reviews/40348/meta')
      .then((response) => {
        setMetaData(response.data.ratings);
        setMetaCharacteristics(response.data.characteristics);
      })
      .catch((err) => console.log(err));

    axios.get(`/a/reviews/40840?count=${100}`)
      .then((res) => {
        setReviews(res.data.results);
      })
      .catch((err) => console.error('help', err));

    axios.get(`/a/questions/40348?count=${100}`)
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
    metaData: state.metaData,
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
