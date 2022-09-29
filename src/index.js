import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import "../node_modules/bootstrap/dist/css/bootstrap.css"
import { Provider } from 'react-redux';
import storeTest from "../src/Store/indexStore";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={storeTest}>
      <App />
    </Provider>

    {/* for store is function */}
    {/* <Provider store={store()}>
      <App />
    </Provider> */}
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
