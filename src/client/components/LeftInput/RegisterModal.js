import React, { useState } from 'react'
import { Modal, Button, Form } from 'react-bootstrap';

const RegisterModal = ({onClose, onSaveCard, newCardInfo, setNewCardInfo}) => {
    const handleInputs = (e) => {
        setNewCardInfo({
            ...newCardInfo,
            [e.target.name]: e.target.value
        })
    }
    return (
        <Modal show={true}>
        <div style={{display: 'flex', flexDirection: 'column', padding: '1rem', alignContent: 'space-between'}}>
            <Form>
                <Form.Group>
                    <Form.Label>1. Card description</Form.Label>
                    <Form.Control type="text" placeholder="Card description" value={newCardInfo.description} onChange={handleInputs} name="description" />
                    <Form.Label style={{marginTop: '1rem'}} >2. Last 4 digits</Form.Label>
                    <Form.Control type="text" placeholder="Last 4 digits" value={newCardInfo.last4digits} onChange={handleInputs} name="last4digits" />
                </Form.Group>
            </Form>
            <Button variant="primary" onClick={onSaveCard} style={{marginTop: '1rem'}} >Save</Button>
            <Button variant="danger" onClick={onClose} style={{marginTop: '1rem'}} >Close</Button>
        </div>
        </Modal>
    )
}

export default RegisterModal