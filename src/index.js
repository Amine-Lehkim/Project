import React from 'react';
import ReactDOM from 'react-dom/client';
<<<<<<< HEAD
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
=======
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
>>>>>>> origin/main

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
<<<<<<< HEAD
    {/* <App />    */}
    {/* <Test /> */}
    <Login />
    {/* <Register /> */}
  </React.StrictMode>
);
=======
    <App />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
>>>>>>> origin/main
reportWebVitals();
