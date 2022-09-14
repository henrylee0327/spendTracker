import React, { useContext } from 'react'
import selectedMonthContext from './context'

const useSelectedMonthProvider = () => {
    return useContext(selectedMonthContext)
}

export default useSelectedMonthProvider