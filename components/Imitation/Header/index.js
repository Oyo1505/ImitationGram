import React, {Fragment} from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { logoutUser } from "../../../actions/";

const StyledHeader = styled.header`
	.nav-bar-header{
		border-bottom: solid 1px  #a0a0a0;
		display: grid;
	    grid-template-columns: auto 1fr;
	    justify-content: space-between;
	    align-items: stretch;
	   	@media (max-width: 1300px) {
	      grid-template-columns: 1fr;
	      justify-content: center;
	    }
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
					<Link to="/imitationgram">Accueil</Link>
					<Link to="/explore"><span className="icon icon-compass"></span></Link>
					{isAuthenticated &&
						<Fragment>
							<Link to={`/user/${this.props.auth.user._id}`}>Dashboard</Link>
							<button onClick={this.logout}>Logout</button>
						</Fragment>	
					}
					{!isAuthenticated &&
						<Link to="/signin">Signin</Link>
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
