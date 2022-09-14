import React, { useState } from 'react'
import useSelectedMonthProvider from '../../providers/selected-month/use-selected-month-provider'
import { Button } from 'react-bootstrap';
import RegisterModal from './RegisterModal'
import useApi from '../../hooks/useApi';

const LeftInput = () => {
    const { month, onSelectMonth } = useSelectedMonthProvider()
    const [ isRegisterCardModalVisible, setIsRegisterCardModalVisible ] = useState(false)
    const [ newCardInfo, setNewCardInfo ] = useState({ description: "", last4digits: "" })
    const { api, endpoints } = useApi()

    const onSaveCard = (event) => {
        console.log('api: ', api)
        console.log('api.get: ', api.get)
        console.log('endpoints: ', endpoints)    
    }
    return (
        <>
            <div style={{
                backgroundColor: "brown", 
                margin: '1rem', 
                borderRadius: '5px', 
                display: 'flex', 
                justifyContent: 'center'}}>
                    <Button onClick={() => setIsRegisterCardModalVisible(true)} variant="success" style={{margin: '1rem'}}>Register your card</Button>
                    {isRegisterCardModalVisible && <RegisterModal onClose={() => setIsRegisterCardModalVisible(false)} onSaveCard={onSaveCard} newCardInfo={newCardInfo} setNewCardInfo={setNewCardInfo} />}
            </div>
        </>
    )
}

export default LeftInput