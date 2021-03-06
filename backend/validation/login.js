const Validator = require('validator');
const isEmpty = require('is-empty');

module.exports = function validateLoginInput(data) {
  let errors = {};
  console.log(data.email, 'login')
  // Convert empty fields to an empty string so we can use validator functions

  data.email = !isEmpty(data.email) ? data.email : "";
  data.password = !isEmpty(data.password) ? data.password : "";

  // email check 

  if(Validator.isEmpty(data.email)){
  	errors.email = "Email field is required";
  }else if(!Validator.isEmail(data.email)){
  	errors.mail = "Email invaid";
  }


  //password check

  if(Validator.isEmpty(data.password)){
  	errors.password = "Password field is required";
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
}