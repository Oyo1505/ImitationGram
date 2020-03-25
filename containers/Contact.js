import React, { Component } from 'react';
import FormContact from "../components/FormContact";


class Contact extends Component{

	render(){
		return(
				<section style={{width: '100%'}}>
						<p className="meta-title">me contacter</p>
						<h1 className="title-section">Contact</h1>
						<FormContact />
				</section>
			);
	}
}

export default Contact
