import React, { Component, useState } from 'react'
import DatePicker from 'react-datepicker'
import 'react-datepicker/dist/react-datepicker.css'

function Date() {
    const[selectedDate, setSelectedDate] = useState(null)

    return (
        
            <DatePicker
            selected={selectedDate}
            onChange={date => setSelectedDate(date)}
            dateFormat='dd/MM/yyyy'
            />
        
    )
}

export default Date
