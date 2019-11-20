import React from 'react';
import { Link } from 'react-router-dom'
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import { withRouter } from 'react-router-dom';
import { loginUser } from "../../../../actions/";

class Signin extends React.Component {
    constructor(props) {
        super();
        this.state = {
            email: "",
            password: "",
            errors: {}
        }
    }

    souldComponentUpdate = (nextProps) => {

        if (nextProps.auth.isAuthenticated) {
            this.props.history.push("/imitation")
        }

        if (nextProps.errors) {
            this.setState({
                errors: nextProps.errors
            });
        }
        return false;
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value });
    }

    onSubmit = (event) => {
        event.preventDefault()
        const userData = {
            email: this.state.email,
            password: this.state.password
        };
        this.props.loginUser(userData)
    }
    render() {
        const { errors } = this.state
        return (
            <div>
				 <form noValidate onSubmit={this.onSubmit}>
				<div>
				<label>
					Email
				</label>
				<input onChange={this.onChange} error={errors.email} 
				type="text"  
				name="email" 
				className={classnames("", {
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
				<input 
				onChange={this.onChange} 
				error={errors.password} 
				type="text"  
				name="password" 
				className={classnames("", {
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
				<div>
					<button type='submit'>Login</button>
				</div>
				</form>
				<p>Pas de compte ? <Link to="/signup" >Créer un compte</Link></p>
			</div>
        );
    }
}

Signin.propTypes = {
    loginUser: PropTypes.func.isRequired,
    auth: PropTypes.object.isRequired,
    errors: PropTypes.object.isRequired
};

const mapStateToProps = state => ({
    auth: state.auth,
    errors: state.errors
});
export default connect(mapStateToProps, { loginUser })(withRouter(Signin));