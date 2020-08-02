import * as types from './types'
import axios from 'axios';
import setAuthToken from "../Utilities/setAuthToken";
import jwt_decode from "jwt-decode";
import { customHistory } from '../index';

/*USER */

// LOAD users 

export const loadUser = (userId) => {
    axios.get(`https://evening-tor-18506.herokuapp.com/${userId}`)
        .then(response => {
            return response;
        })
        .catch(err =>{throw(err)});
};

export const loadUsersSuccess = users => {

    return { type: types.LOAD_USERS_SUCCESS, payload: users };
};

export const loadAllUsers = () => dispatch => {
    axios.get(`https://evening-tor-18506.herokuapp.com/users/`)
        .then(res => {
            dispatch(loadUsersSuccess(res.data))
        })
         .catch(err =>{throw(err)});

}
// Register User
export const registerUser = (userData, history)  => {
    axios
        .post(`https://evening-tor-18506.herokuapp.com/users/register`, userData)
        .then(res => history.push("/signin")) // re-direct to login on successful register
         .catch(err =>{throw(err)});
};
// Login - get user token
export const loginUser = userData => dispatch => {

    axios
        .post(`https://evening-tor-18506.herokuapp.com/users/login`, userData)
        .then(res => {
            // Save to localStorage
            // Set token to localStorage
            const { token } = res.data;

            localStorage.setItem("jwtToken", token);

            // Set token to Auth header
            setAuthToken(token);
            // Decode token to get user data
            const decoded = jwt_decode(token);
            // Set current user
            dispatch(setCurrentUser(decoded));

        })
        .catch(err =>{throw(err)});

};

export const editUser = userData => dispatch => {
    axios.put(`https://evening-tor-18506.herokuapp.com/users/${userData._id}`, userData)
        .then(res => {
            dispatch({
                type: types.UPDATE_USER_SUCCESS,
                payload: res.data
            })
        })
        .catch(err =>{throw(err)});
}


// Set logged in user
export const setCurrentUser = decoded => {

    return {
        type: types.SET_CURRENT_USER,
        payload: decoded
    };
};
// User loading
export const setUserLoading = userData => dispatch => {
    return {
        type: types.LOAD_USER_SUCCESS,
        payload: userData
    };
};
// Log user out
export const logoutUser = () => dispatch => {
    // Remove token from local storage
    localStorage.removeItem("jwtToken");
    // Remove auth header for future requests
    setAuthToken(false);
    // Set current user to empty object {} which will set isAuthenticated to false
    dispatch(setCurrentUser({}));
};

/*DELETE USER*/ 
export const deleteUser = userData => dispatch =>{
  axios.delete(`https://evening-tor-18506.herokuapp.com/users/${userData._id}`, userData)
    .then( res =>{
        dispatch(deleteUserSuccess(userData));
    })
    .catch(err =>{throw(err)});
}

export const deleteUserSuccess = userData =>  {
    return {
        type: types.DELETE_USER_SUCCESS,
        payload: userData
    };
};



/*IMAGE*/

export const loadImagesSuccess = images => {

    return { type: types.LOAD_IMAGES_SUCCESS, payload: images };
};

export const loadAllImages = () => dispatch => {
    axios.get(`https://evening-tor-18506.herokuapp.com/images/`)
        .then(res => {
          dispatch(loadImagesSuccess(res.data))
        })
         .catch(err =>{throw(err)});

}


export const addImage = imageData => dispatch => {
  axios.post(`https://evening-tor-18506.herokuapp.com/images/add-image`, imageData)
  .then( res => { 
    dispatch(addImageSuccess(imageData));
    customHistory.push(`/edit-image/${imageData.name}`);
  })
  .catch( err =>{ throw(err)});
}

export const addImageSuccess = imageData => {
  return {
    type: types.ADD_IMAGE_SUCCESS,
    payload: imageData
  }
}

export const deleteImage = imageData => dispatch => {
 
  axios.delete(`https://evening-tor-18506.herokuapp.com/images/${imageData._id}`, imageData)
  .then( res => { 
    dispatch(deleteImageSuccess(imageData));
  })
  .catch( err =>{ throw(err)});
}

export const deleteImageSuccess = imageData => {
  return {
    type: types.DELETE_IMAGE_SUCCESS,
    payload: imageData
  }
}

export const updateImage = imageData => dispatch => {
  axios.put(`https://evening-tor-18506.herokuapp.com/images/${imageData.name}`, imageData)
  .then( res => { 
   
    dispatch(updateImageSuccess(imageData));
  })
  .catch( err =>{ throw(err)});
}


export const updateImageSuccess = imageData => {
  return {
    type: types.UPDATE_IMAGE_SUCCESS,
    payload: imageData
  }
}