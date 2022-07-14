import React from 'react';
import renderer from 'react-test-renderer';
import { Provider } from 'react-redux';
import store from '../store';
import Overview from "./Overview";


it('Does Somesthing', async () => {
  const component = renderer.create(
    <Provider store={store}>
      <Overview /> 
    </Provider>
  );
  const tree = component.toJSON();
  expect(tree.type).toEqual('div');

});
