import React, {Fragment} from 'react';
import { connect } from 'react-redux';

import ListImages from '../../Image/list-images';
import { Link } from 'react-router-dom';



 class UserPage extends React.Component {

	render() {
		return (
			<Fragment>
				<p><Link to={`/dashboard/edit/${this.props.auth.user._id}`}>Edit Your Profil</Link></p>
				<Link to={`/dashboard/add/`}><button> Upload an image</button></Link>
	            <section>
	             	<h3> Pictures </h3>
	            	<ListImages userId={this.props.auth.user._id}/>
	            </section>
			</Fragment>
		);
	}
}
const  mapStateToProps = (state) =>  {
	return {
		auth: state.auth
	};
}
export default connect(	mapStateToProps,null)(UserPage);
