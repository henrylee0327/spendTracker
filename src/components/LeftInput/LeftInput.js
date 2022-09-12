import React, { useState } from 'react'
import useSelectedMonthProvider from '../../providers/selected-month/use-selected-month-provider'
import { Button } from 'react-bootstrap';
import RegisterModal from './RegisterModal

const LeftInput = () => {
    const {month, onSelectMonth} = useSelectedMonthProvider()
    const [ isRegisterCardVisible, setIsRegisterCardVisible ] = useState(false)

    return (
        <>
            <div style={{
                backgroundColor: "brown", 
                margin: '1rem', 
                borderRadius: '5px', 
                display: 'flex', 
                justifyContent: 'center'}}>
                    <Button onClick={() => setIsRegisterCardVisible(true)} variant="success" style={{margin: '1rem'}}>Register your card</Button>
                    {isRegisterCardVisible && <RegisterModal label='Close' onClick={() => setIsRegisterCardVisible(false)} />}
            </div>
        </>
    )
}

export default LeftInput