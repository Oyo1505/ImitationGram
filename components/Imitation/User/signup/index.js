import React from 'react';
import { connect } from "react-redux";
import Header from '../../Header';
import classnames from "classnames";
import PropTypes from "prop-types";
import { registerUser } from "../../../../actions/";

class Signup extends React.Component {

    constructor(props) {
        super();
        this.state = {
            name: "",
            email: "",
            password: "",
			password2: "",
			profilPicture:"",
            errors: {},
        }
    }

    componentDidMount() {
        // If logged in and user navigates to Register page, should redirect them to dashboard
        if (this.props.auth.isAuthenticated) {
           this.props.history.push("/dashboard");
        }
    }

    onChange = (event) => {
        this.setState({
            [event.target.name]: event.target.value })

    }

    onSubmit = async (event) => {
    	event.preventDefault();
        const newUser = {
            name: this.state.name,
            email: this.state.email,
            password: this.state.password,
			password2: this.state.password2,
			profilPicture:"",
        };

        this.props.registerUser(newUser, this.props.history);
        this.props.history.push("/imitationgram");
    }

    render() {

        const { errors } = this.state;
        return (
            <div className="container-imitation valign-wrapper">
            <Header /> 
				<form className='form-signin' noValidate onSubmit={this.onSubmit}>
					<div>
					<label>
						Pseudo
					</label>
					<br/>
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
					<br/>
					<input onChange={this.onChange} 
					type="text"  
					name="email"
					value={this.state.email} 
					className={classnames("input-text-user-imiatation", {
						invalid: errors.email
					})}
					/>
					<span className="red-text">{errors.email}</span>
					</div>
					<div>
					<label>
						Password
					</label>
					<br/>
					<input onChange={this.onChange} 
					type="password"
					name="password"
					value={this.state.password} 
					className={classnames("input-text-user-imiatation", {
						invalid: errors.password
					})}
					/>
					<span className="red-text">{errors.password}</span>
					</div>
					<div>
					<label>
						Confirmer	Password
					</label>
					<br/>
					<input onChange={this.onChange} 
					type="password"  
					name="password2" 
					value={this.state.password2} 
					className={classnames("input-text-user-imiatation", {
						invalid: errors.password2
					})}
					/>
						<span className="red-text">{errors.password2}</span>
					</div>
					<div>
						<button className="from-btn-imitation" onClick={this.onSubmit} type="button">Signup</button>
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
    auth: state.auth,
    errors: state.errors
});

export default connect(mapStateToProps, { registerUser })(Signup);