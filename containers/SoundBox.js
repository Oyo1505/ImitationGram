import React, { Component, Fragment } from 'react';
import Header from '../containers/Header';
import { Container, Row } from 'react-bootstrap';
import SoundCards from '../components/Kaamelott/SoundCards';
import imagesCharacter from '../images/images.json';

class SoundBox extends Component {

    constructor() {
        super()
        this.state = {
            kaamelott: [],

        };
    }

    componentDidMount() {

        let arrayCharacter = [];
        imagesCharacter.map(function(image) {
            var link = require(`../images/${image.file}`)
            return arrayCharacter.push({ id: image.id, character: image.character, file: link });
        });
        this.setState({ kaamelott: arrayCharacter });
    }

    render() {
        return (
            <Fragment>
				<Container fluid='true'>
					<Row className="show-grid">
				        <SoundCards key={this.state.kaamelott.character} kaamelott={this.state.kaamelott} />
				   </Row>
			    </Container>
			</Fragment>
        )

    }

}

export default SoundBox;