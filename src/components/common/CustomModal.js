import React from 'react'
import { Modal, Button } from 'react-bootstrap';

const CustomModal = ({label, onClick}) => {

    return (
        <Modal show={true}>
            Hello from Modal
            <Button variant="secondary" onClick={onClick}>
            {label}
          </Button>
        </Modal>
    )
}

export default CustomModal