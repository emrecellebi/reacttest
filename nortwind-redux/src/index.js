import React from 'react';
import ReactDOM from 'react-dom/client';
import {Provider} from "react-redux";

import 'bootstrap/dist/css/bootstrap.min.css'
// import 'alertifyjs/build/css/alertify.min.css'

import App from './components/root/App';
import configureStore from "./redux/reducers/configureStore";

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<Provider store={configureStore()}><App /></Provider>);