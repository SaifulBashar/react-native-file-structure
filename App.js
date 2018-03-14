/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import App from "./app/route";
import { Provider } from "react-redux";
import { store } from "./app/store";

export default class AppContainer extends Component {
  render() {
    return (
      <Provider store={store}>
        <App />
      </Provider>
    );
  }
}
