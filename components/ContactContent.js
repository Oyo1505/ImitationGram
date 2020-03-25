import React, { Component } from 'react';
import ContactForm from './ContactForm';

class ContactContent extends Component{
	render(){
		return(
				<div id='contact-content'>
					<ContactForm />
				</div>
			);
	}
}

export default ContactContent