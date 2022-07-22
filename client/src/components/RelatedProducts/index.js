import axios from 'axios';
import store from '../../store';
import RelatedProductContianer from './RelatedProducts';

// This file handles data initalization for the Related Products components
let { productId } = store.getState();

function getDefaultStyle(styles) {
  const defaultStyle = styles.filter((style) => style['default?'])[0];
  return defaultStyle || styles[0];
}

function dispatchProduct(dispatch, responses) {
  if (!responses[1].data.results) {
    console.error('error retrieving style data');
    return;
  }

  const info = responses[0].data;
  const style = getDefaultStyle(responses[1].data.results);
  const reviews = responses[2].data;

  const product = {
    id: info.id,
    img: style.photos[0].thumbnail_url,
    name: info.name,
    category: info.category,
    price: style.original_price,
    sale: style.sale_price,
    ratings: reviews.ratings,
  };

  dispatch({ type: 'ADDRELATEDPRODUCT', product });
}

// Atelier API data initialization
const getRelatedProducts = (dispatch) => {
  let api = axios.get(`/a/products/${productId}/related`)
    .then(({ data }) => {
      const uniqueIDs = data.filter((id, i) => data.indexOf(id) === i);

      uniqueIDs.forEach((id) => {
        api = api
          .then(() => (
            Promise.all([
              axios.get(`/a/products/${id}`),
              axios.get(`/a/products/${id}/styles`),
              axios.get(`/a/reviews/${id}/meta`),
            ])
          ))
          .then(dispatchProduct.bind(null, dispatch));
      });
    })
    .catch((err) => console.error(err.message));
};


function handleIdChange() {
  const previousId = productId;
  productId = store.getState().productId;
  if (previousId !== productId) {
    store.dispatch(getRelatedProducts);
  }
}
store.subscribe(handleIdChange);
store.dispatch(getRelatedProducts);


export default RelatedProductContianer;
