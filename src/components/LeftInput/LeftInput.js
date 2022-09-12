import React, { useState } from 'react'
import useSelectedMonthProvider from '../../providers/selected-month/use-selected-month-provider'
import { Button } from 'react-bootstrap';
import CustomModal from '../common/CustomModal'

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
                    {isRegisterCardVisible && <CustomModal label='Close' onClick={() => setIsRegisterCardVisible(false)} />}
            </div>
        </>
    )
}

export default LeftInput