import React, { useState } from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './ScheduleService.css'

type ScheduleServiceProps = {
    service: string
}

export default function ScheduleService(props: ScheduleServiceProps) {
    const { service } = props
    const currentDate = new Date()
    const [scheduleDate, setScheduleDate] = useState(new Date(getMinYear(), getMinMonth(), getMinDay()))

    function getMinDay() {
        return currentDate.getDate() + 1
    }

    function getMinMonth() {
        return currentDate.getMonth()
    }

    function getMinYear() {
        return currentDate.getFullYear()
    }

    function findMaxDate() {
        const currentDay = getMinDay()
        const currentMonth = getMinMonth()
        const currentYear = getMinYear()
        
        let maxDay: number 
        let maxMonth: number
        let maxYear: number

        const checkDate = new Date(currentYear, currentMonth, 0).getDate()

        if(currentDay <= checkDate) {
            maxDay = currentDay
        } else {
            maxDay = 1
        }

        if((currentMonth + 1) < 12) {
            maxMonth = currentMonth + 1
            maxYear = currentYear
        } else {
            maxMonth = 1
            maxYear = currentYear + 1
        }

        return new Date(maxYear, maxMonth, maxDay)

    }

    function Schedule() {
        const minDay = getMinDay()
        const minMonth = getMinMonth()
        const minYear = getMinYear()

        const minDate = new Date(minYear, minMonth, minDay )
        const maxDate = findMaxDate()

        return (
            <Calendar view='month'
            minDate={ minDate }
            minDetail='month'
            maxDate={ maxDate }
            defaultValue={ minDate }
            onClickDay={ (newDate) => setScheduleDate(newDate) }
            value={ scheduleDate }/>
        )
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <Schedule />
            <p className='mt-5'>{service}</p>
            <p className='mt-5'>{scheduleDate.toString()}</p>
        </div>
    )
}