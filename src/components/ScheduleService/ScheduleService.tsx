import React from 'react'
import Calendar from 'react-calendar'
import 'react-calendar/dist/Calendar.css'
import './ScheduleService.css'

type ScheduleServiceProps = {
    service: string
}

export default function ScheduleService(props: ScheduleServiceProps) {
    const { service } = props
    const date = new Date()

    function getMinDay() {
        return date.getDate()
    }

    function getMinMonth() {
        return date.getMonth()
    }

    function getMinYear() {
        return date.getFullYear()
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
        const currentDay = getMinDay()
        const currentMonth = getMinMonth()
        const currentYear = getMinYear()

        const minDate = new Date(currentYear, currentMonth, (currentDay + 1))
        const maxDate = findMaxDate()

        return (
            <Calendar view='month'
            minDate={minDate}
            minDetail='month'
            defaultActiveStartDate={minDate} 
            defaultValue={minDate}
            maxDetail='month'
            maxDate={maxDate} 
            />
        )
    }

    return (
        <div className='flex flex-col justify-center items-center mt-10'>
            <Schedule />
            <p className='mt-5'>{service}</p>
        </div>
    )
}