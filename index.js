import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter, Router  } from "react-router-dom";
import { Provider } from 'react-redux';
import configureStore from './configureStore';
import { createBrowserHistory } from 'history';
import jwt_decode from "jwt-decode";
import setAuthToken from "./Utilities/setAuthToken";
import { loginUser, loadAllUsers, setCurrentUser, logoutUser, loadAllImages } from './actions/index'
import App from './App';

const customHistory = createBrowserHistory();

const store = configureStore();
store.dispatch(loadAllUsers());
store.dispatch(loadAllImages());

// Check for token to keep user logged in
if (localStorage.jwtToken) {

  // Set auth token header auth
  const token = localStorage.jwtToken;
  setAuthToken(token);
  // Decode token and get user info and exp
  const decoded = jwt_decode(token);
  // Set user and isAuthenticated
  store.dispatch(setCurrentUser(decoded));

// Check for expired token
  const currentTime = Date.now() / 1000; // to get in milliseconds
  if (decoded.exp < currentTime) {
    // Logout user
    store.dispatch(logoutUser());
    // Redirect to login
    window.location.href = "./signin";
  }
}



require("./assets/sass/screen.scss");


ReactDOM.render(


	<BrowserRouter>	
	  <Provider store={store}>
     <Router  history={customHistory}>
		  <App /> 
	 </Router>
	 </Provider>
	</BrowserRouter>, document.getElementById('root')
	);

