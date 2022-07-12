
// This is where you will map the state / dispatch to props
// You will also need to import the component and action associated with the prop
import React from 'react';
import { connect } from 'react-redux';

function Search({ query, updateQuery }) {
  return (
    <input type="text" onChange={updateQuery} value={query} placeholder="Search..." />
  );
}

// Will not have to map dispatch to components that do not use event handlers

const SearchContainer = connect(
  // connects the props to the state saved in the store
  (state) => ({
    query: state.searchQuery,
  }),
  // links the event handler to the store via dispatch
  (dispatch) => ({
    updateQuery: (event) => dispatch({ type: 'SETQUERY', q: event.target.value }),
  }),
)(Search);

export default SearchContainer;
