import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import { ApolloProvider } from '@apollo/client'

import { Provider } from 'react-redux'
import store from './redux/store'

import './fonts/Telex/Telex-Regular.ttf'
import './fonts/abel/Abel-Regular.ttf'
import './index.css';

import App from './App'
import { client } from './adapters/apolloProvider'



ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
      <ApolloProvider client={client}>
        <Provider store={store}>
          <App />
        </Provider>
      </ApolloProvider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
