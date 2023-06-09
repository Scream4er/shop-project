import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";
import {store, persistor} from "./store/store";
import {stripePromise} from "./utils/stripe/stripe";
import {BrowserRouter} from "react-router-dom";
import {PersistGate} from "redux-persist/integration/react";
import {Elements} from "@stripe/react-stripe-js";

import App from './components/app/app';
import './index.scss';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
      <Provider store={store}>
          <PersistGate persistor={persistor}>
              <BrowserRouter>
                  <Elements stripe={stripePromise}>
                      <App />
                  </Elements>
              </BrowserRouter>
          </PersistGate>
      </Provider>
  </React.StrictMode>
);
