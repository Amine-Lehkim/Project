import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import reportWebVitals from './reportWebVitals';
import {
  MDBFooter,
  MDBContainer,
  MDBCol,
  MDBRow,
  MDBIcon,
  MDBBtn
} from 'mdb-react-ui-kit';
import Test from './Comp/Comment'
import Login from './login'
import Register from './register'
import './App.css'

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    {/* <App />    */}
    {/* <Test /> */}
    <Login />
    {/* <Register /> */}
  </React.StrictMode>
);
reportWebVitals();
