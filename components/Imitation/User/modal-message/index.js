import React, { useState } from 'react';
import PropTypes from 'prop-types';
import { Modal } from 'react-bootstrap';

 const ModalMessage = (props) => {
    const  [toggle, setToggle] = useState(false);
    const handleClose = () => {
      props.close(false);
    };
    return (
        <Modal
        animation={false}
        size="xl"
       show={props.show} 
       onHide={handleClose}
       dialogClassName="modal-90w"
       centered
        >
            <p>{props.message}</p>
        </Modal>
    )
}

/*ModalMessage.propTypes = {
    prop: PropTypes
}*/

export default ModalMessage;
