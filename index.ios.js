import { Provider } from "react-redux";
import logger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware, compose } from "redux";
import App from './src/components/App';
import reducers from "./src/reducers";
import React from 'react';
import { AppRegistry } from 'react-native';


const middleware = applyMiddleware(thunk, logger());

const enhancers = compose(
  middleware
);

const store = createStore(reducers, enhancers);


const XUber = () => (
  <Provider store={store}>
    <App />
  </Provider>
);

AppRegistry.registerComponent('XUber', () => XUber);
