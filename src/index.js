import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { store } from './redux/store';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
// Here we are wrapping the App (Parent Component) with Provider, so that we can pass store to all the child components.
    <Provider store={store}>
         <App />
    </Provider>
       

  
);
