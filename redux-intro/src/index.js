import React from 'react';
import ReactDOM from 'react-dom/client';
// import './index.css';
import App from './App';
// import reportWebVitals from './reportWebVitals';

import configureStore from "./redux/reducers/configureStore";
import {Provider} from "react-redux";


const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(<Provider store={configureStore()}><App /></Provider>);

// reportWebVitals();
