import React from 'react';
import { connect } from "react-redux";
import classnames from "classnames";
import PropTypes from "prop-types";
import {withRouter} from 'react-router-dom';
import { registerUser } from "../../../../actions/";

class Signup extends React.Component {

	constructor(props){
		super();
		this.state = {
			name: "",
			email: "",
			password: "",
			password2: "",
			errors: {},
		}
	}
	/*shouldComponentUpdate (nextProps){
		if(nextProps.errors){
			this.setState({
				errors : nextProps.errors
			});
		}
		return true;
	}*/

	componentDidMount() {
    // If logged in and user navigates to Register page, should redirect them to dashboard
    if (this.props.auth.isAuthenticated) {
      this.props.history.push("/dashboard");
    }
  }
	onChange = (event) => {
		this.setState({ [event.target.name]: event.target.value })
		
	}	

	onSubmit = (event) => {
		

		const newUser = {
			name: this.state.name,
			email: this.state.email,
			password: this.state.password,
			password2: this.state.password2,
		};

		this.props.registerUser(newUser, this.props.history)
		
	}

	render() {

		const { errors } = this.state;
		return (
			<div style={{ height: "5vh" }} className="container valign-wrapper">
				 <form noValidate onSubmit={this.onSubmit}>
				<div>
				<label>
					Pseudo
				</label>
				<input onChange={this.onChange} 
				type="text"  
				name="name" 
				value={this.state.name}
				 className={classnames("", {
                    invalid: errors.name
                  })}
				/>
				<span className="red-text">{errors.name}</span>
				</div>
				<div>
				<label>
					Email
				</label>
				<input onChange={this.onChange} 
				type="text"  
				name="email"
				value={this.state.email} 
				 className={classnames("", {
                    invalid: errors.email
                  })}
				/>
				<span className="red-text">{errors.email}</span>
				</div>
				<div>
				<label>
					Password
				</label>
				<input onChange={this.onChange} 
				type="text"  
				name="password"
				value={this.state.password} 
				className={classnames("", {
                    invalid: errors.password
                  })}
				/>
				<span className="red-text">{errors.password}</span>
				</div>
				<div>
				<label>
					Confirmer	Password
				</label>
				<input onChange={this.onChange} 
				type="text"  
				name="password2" 
				value={this.state.password2} 
				className={classnames("", {
                    invalid: errors.password2
                  })}
				/>
					<span className="red-text">{errors.password2}</span>
				</div>
				<div>
					<button type="submit">Login</button>
				</div>
				</form>


			</div>
		);
	}
}
Signup.propTypes = {
  registerUser: PropTypes.func.isRequired,
  auth: PropTypes.object.isRequired,
  errors: PropTypes.object.isRequired
};
const mapStateToProps = state => ({
	auth:state.auth,
	errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(withRouter(Signup))