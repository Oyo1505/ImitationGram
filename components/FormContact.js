import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { Form, FormGroup, FormControl } from 'react-bootstrap';
import axios from 'axios'

class FormContact extends Component {

    constructor(props, context) {
        super(props, context);



        this.state = {
            name: '',
            email: '',
            message: '',
        };

        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value })

    }

     handleSubmit = async (e) => {
        e.preventDefault();
        const name = e.target.name.value;
        const email = e.target.email.value;
        const message = e.target.message.value;
        const data = { name, email, message };

        const form = await axios.post('/api/form', data)
            .then(response => {
                console.log('message Envoyer');
            }).catch(err => {
                console.log('message pas Envoyer');
                console.log(err);
            });

        this.setState({
            name: '',
            email: '',
            message: ''
        });
        alert('Merci Pour votre message');
    }



    render() {

        return (

            <div id='formContact'>
            <Form  onSubmit={this.handleSubmit}>  

                <FormGroup className="wrap-input2 validate-input" data-validate="Nom est requis">

                  <FormControl onChange={this.handleChange} className="inputText input2" type="text" name="name"  />
                  <span className="focus-input2" data-placeholder="NOM"></span>
                </FormGroup>
                <FormGroup  className="wrap-input2 validate-input" data-validate="EMail est requis: ex@abc.xyz">

                  <FormControl onChange={this.handleChange} className="inputText input2" type="email" name="email" />
                  <span className="focus-input2" data-placeholder="EMAIL"></span>

                </FormGroup>

                 <FormGroup className="wrap-input2 validate-input" data-validate="Message requis !">

                  <FormControl onChange={this.handleChange} as="textarea" className="input2" name="message"  />
                  <p className="focus-input2" data-placeholder="MESSAGE"></p>

                </FormGroup>

                 <div className="container-contact2-form-btn">
                  <div className="wrap-contact2-form-btn">
                      <div className="contact2-form-bgbtn"></div>
                        
                         <button className="contact2-form-btn" type="submit"  >Envoyer</button>
                    </div>
                  </div>  
            </Form>
         </div>


        );
    }
}

export default FormContact

FormContact.propTypes = {
    name: PropTypes.string,
    email: PropTypes.string,
    message: PropTypes.string,
}