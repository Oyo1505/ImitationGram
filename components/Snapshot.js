import React from 'react';
import { Modal } from 'react-bootstrap';


class Snapshot extends React.Component {

	constructor(props) {
		super(props);
		this.state = { end : true }
		this.toggle = this.toggle.bind(this);
	}

	toggle(){

			this.setState({end: !this.state.end});
		};
	render() {

		return (
			<>
				<Modal 
				show={this.props.end} 
				onHide={this.toggle}
				size="lg"  
				aria-labelledby="contained-modal-title-vcenter"
			     centered
			     closeButton
				>
						<Modal.Header >
							<Modal.Title>Snapshot</Modal.Title>
					 	</Modal.Header>
						<Modal.Body 	className="modal-imitation">
							<p>sFsdfsdfsgsigjdkf</p>
						</Modal.Body>
				</Modal>
			</>
		);
	}
}
export default  Snapshot;