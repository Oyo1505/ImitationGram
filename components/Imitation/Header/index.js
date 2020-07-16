import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../../actions/";

const StyledHeader = styled.header`
	.nav-bar-header{
		display: grid;
   		grid-template-columns: 25% 25% 25% 25%;
		place-items: center;
		grid-template-rows: 50px;
		box-shadow:0px 2px 2px #e2e2e2;
	}
`;



class Header extends React.Component {

logout = async (event) => {
	event.preventDefault();
	this.props.logoutUser();
	this.props.history.push("/imitationgram");
}

render() {
		const { isAuthenticated } = this.props.auth;
		return (
			<StyledHeader>
				<div className="nav-bar-header">
					<Link className="nav-header-item" to="/imitationgram">Accueil</Link>
					<Link className="nav-header-item" to="/explore"><span className="icon icon-compass"></span></Link>
					{isAuthenticated &&
						<>
							<Link className="nav-header-item" to={`/user/${this.props.auth.user._id}`}>Dashboard</Link>
							<button className="nav-header-item" onClick={this.logout}>Logout</button>
						</>	
					}
					{!isAuthenticated &&
						<>
						<Link className="nav-header-item" to="/signin">Signin</Link>
						<Link className="nav-header-item" to="/signup">Signup</Link>
						</>
					}
				</div>
			</StyledHeader>
		);
	}
}

Header.propTypes= {
	logoutUser: PropTypes.func.isRequired,
	auth : PropTypes.object.isRequired,

}


const mapStateToProps =(state) => {
	return {
		auth: state.auth
	}
}

export default connect(mapStateToProps, {logoutUser})(Header);
