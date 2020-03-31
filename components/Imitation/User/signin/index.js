import React, {useState, useEffect} from 'react';
import Header from '../../Header/'
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { loginUser } from "../../../../actions/";

const Signin = React.memo((props) =>  {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [errors, setErrors] = useState({});
    
    function shouldComponentUpdate(nextProps){
     
        if (nextProps.auth.isAuthenticated) {
      
            this.props.history.push("/imitationgram");
        }
        if (nextProps.errors) {
            setErrors(nextProps.errors);
        }
        return false;
    };

    function onChange (event) {
        if(event.target.name === "password"){
            setPassword(event.target.value);
        }else if(event.target.name === "email"){
            setEmail(event.target.value);
        }
    };

    async function onSubmit(event){
        event.preventDefault();
        const userData = {
            email,
            password
        };
        props.loginUser(userData);
        props.history.push("/imitationgram")
    };
        return (
            <div  className="container">
               
				<form className='form-signin' noValidate onSubmit={onSubmit}>
                    <div>
                    <label>
                        Email 
                    </label>
                    <br/>
                    <input onChange={onChange} error={errors.email} 
                    type="text"  
                    name="email" 
                    className={classnames("input-text-user-imiatation", {
                        invalid: errors.email || errors.emailnotfound
                    })}
                    />
                    <span className="red-text">
                    {errors.email}
                    {errors.emailnotfound}
                    </span>
                    </div>
                    <div>
                    <label>
                        Password 
                    </label>
                    <br/>
                    <input 
                    onChange={onChange} 
                    error={errors.password} 
                    type="password"
                    name="password" 
                    className={classnames("input-text-user-imiatation", {
                        invalid: errors.password || errors.passwordincorrect
                    })}
                    />
                    <span className="red-text">
                    {errors.password}
                    {errors.passwordincorrect}
                    </span>
                    </div>
                    <div>
                    </div>
                        <button className="from-btn-imitation" type='submit' onSubmit={onSubmit} >Login</button>
                    <p>Pas de compte ? <Link to="/signup" >Créer un compte</Link></p>
				</form>
				
			</div>
        );
});

Signin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(Signin);