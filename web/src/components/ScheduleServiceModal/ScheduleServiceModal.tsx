import React from 'react'
import { Link } from 'react-router-dom'

type ScheduleServiceModalProps = {
    service: String,
    scheduleDate: Date,
    scheduleTime: String,
    back: () => void,
    confirm: () => void
}

export default function ScheduleServiceModal(props: ScheduleServiceModalProps) {
    const { service, scheduleDate, scheduleTime, back, confirm } = props
    const monthNames = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]

    function convertToStandardTime(time: String) {
        const [hours, minutes] = time.split(':')
        let formattedHours = parseInt(hours)
        const suffix = formattedHours >= 12 ? 'pm' : 'am'
      
        if (formattedHours === 0) {
          formattedHours = 12
        } else if (formattedHours > 12) {
          formattedHours -= 12
        }
      
        return `${formattedHours}:${minutes} ${suffix}`
      }

    return (
        <div className='flex flex-col justify-center items-center fixed left-0 top-0 right-0 bottom-0 bg-modal-bg-gray'>
            <div className='w-[250px] md:w-[500px] h-[250px] md:h-[500px] bg-white rounded-lg'>
                <div className='flex justify-center items-center h-1/5 '>
                    <h3 className='font-bold text-xl md:text-2xl'>Confirm Scheduling</h3>
                </div>
                <div className='flex justify-center items-center h-3/5'>
                    <p className='text-sm md:text-xl text-center w-5/6'>
                        You are scheduling a <b>{ service }</b> appointment on:&nbsp;
                        <b>{ monthNames[scheduleDate.getMonth()] } { scheduleDate.getDate() }, { scheduleDate.getFullYear() }</b> at <b>{ convertToStandardTime(scheduleTime) }</b>
                    </p>
                </div>
                <div className='flex flex-row justify-evenly items-center h-1/5 border-t-[1px] border-light-gray'>
                    <button className='bg-forest-green h-4/5 w-24 md:w-36 rounded-md text-white md:text-xl font-bold'
                    onClick={() => back()}>
                        Back
                    </button>
                    <Link to="/" className='h-4/5 w-24 md:w-36 '>
                        <button className='bg-forest-green w-full h-full rounded-md text-white md:text-xl font-bold'
                            onClick={() => confirm()}>
                            Confirm
                        </button>
                    </Link>
                </div>
            </div>
        </div>
    )
}