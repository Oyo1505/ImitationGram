import * as types from './types'
import axios from 'axios';
import setAuthToken from "../Utilities/setAuthToken";
import jwt_decode from "jwt-decode";

/*USER */
// LOAD users 

export const loadUser = (userId) => {
    axios.get(`http://localhost:5000/users/${userId}`)
        .then(response => {
            return response;
        })
        .catch(err =>{throw(err)});

};

export const loadUsersSuccess = users => {

    return { type: types.LOAD_USERS_SUCCESS, payload: users };
};

export const loadAllUsers = () => dispatch => {
    axios.get('http://localhost:5000/users/')
        .then(res => {
            dispatch(loadUsersSuccess(res.data))
        })
         .catch(err =>{throw(err)});

}
// Register User
export const registerUser = (userData, history) => dispatch => {
    axios
        .post("http://localhost:5000/users/register", userData)
        .then(res => history.push("/signin")) // re-direct to login on successful register
         .catch(err =>{throw(err)});

};
// Login - get user token
export const loginUser = userData => dispatch => {

    axios
        .post("http://localhost:5000/users/login", userData)
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
    axios.put(`http://localhost:5000/users/${userData._id}`, userData)
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

export const deleteUser = userData => dispatch =>{
  axios.delete(`http://localhost:5000/users/${userData._id}`, userData)
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
    axios.get('http://localhost:5000/images/')
        .then(res => {
          console.log(res.data)
            dispatch(loadImagesSuccess(res.data))
        })
         .catch(err =>{throw(err)});

}


export const addImage = imageData => dispatch => {
  axios.post(`http://localhost:5000/images/add-image`, imageData)
  .then( res => {
    dispatch(addImageSuccess(imageData));
  })
  .catch( err => throw(err));
}

export const addImageSuccess = imageData => {
  return {
    type: types.ADD_IMAGE_SUCCESS,
    payload: imageData
  }
}


















/*USER*/
/*
export function createUser(user){
  
  return  (dispatch) =>   {
    return userApi.createUser(user).then(responseUser => {
      dispatch(createUserSuccess(responseUser));
      return responseUser;
    }).catch(error =>{ throw(error)});
  }
}

export function deleteUser(user){

  return function (dispatch){
  return userApi.deleteUser(user).then( () => {
      dispatch(deleteUserSuccess(user))
    }).catch(error =>{ throw(error)});
  }
}
export function loadUsers() {
    return function (dispatch) {
      return userApi.getAllUsers().then(user => {
              dispatch(loadUsersSuccess(user));
             })
             .catch(error=> {
                throw(error);
             });
    };
};

export function loginUser(user) {
    return function (dispatch) {
      return userApi.loginUser().then(responseUser => {
              dispatch(loadUserSuccess(responseUser));
             })
             .catch(error=> {
                throw(error);
             });
    };
};

export function updateUser(user) {
  return  (dispatch) => {
    return userApi.updateUser(user).then(responseUser => {
      dispatch(updateUserSuccess(responseUser));
    }).catch(error => {
      throw(error);
    });
  };
}

*/