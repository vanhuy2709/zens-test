import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

// Import React Redux Store
import { createStore, applyMiddleware } from 'redux';
import rootReducer from './store/reducers/index.js';
import { thunk } from 'redux-thunk'
import { Provider } from 'react-redux';

// Store Initial
const store = createStore(rootReducer, applyMiddleware(thunk));

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
)
