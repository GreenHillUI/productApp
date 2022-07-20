/**
 * @jest-environment jsdom
 */
/* eslint-disable no-undef */
/* eslint-disable import/no-extraneous-dependencies */
import { Provider } from 'react-redux';
import App from '../client/src/components/App';
import store from '../client/src/store';

const React = require('react');
const { create } = require('react-test-renderer');
// const { render, screen } = require('@testing-library/react');

// const screen = require('@testing-library/react').screen;


describe('App Component Snapshot test', () => {

  test('adding or verifying App Snapshot', () => {

    const AppSnap = create(
      <Provider store={store}>
        <App />
      </Provider>
    );
    expect(AppSnap.toJSON()).toMatchSnapshot();
  });

});

