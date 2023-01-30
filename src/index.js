import React from 'react';
import { Provider } from "react-redux";
import ReactDOM from 'react-dom/client';
import './styles/styles.css';
import App from './App';
import { AppContextProvider } from './store';
import store from './reduxStore';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <AppContextProvider>
      <Provider store={store}>
        <App />
      </Provider>
    </AppContextProvider>
  </React.StrictMode>
);
