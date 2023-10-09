import React from "react";

type AppointmentConfirmModalProps = {
  scheduleDate: Date,
  scheduleTime: String,
  selectedService: String,
  close: () => void
}

export default function AppointmentConfirm(props: AppointmentConfirmModalProps) {
  const { scheduleDate, scheduleTime, selectedService, close } = props
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
    <div className='flex justify-center items-center fixed left-0 top-0 right-0 bottom-0 bg-modal-bg-gray z-50'>
      <div className="flex flex-col items-center justify-between bg-white w-96 h-80 rounded-md">
        <h3 className="text-2xl font-bold mt-2">Appointment Confirmed &#128077;</h3>
        <p className="mt-5 text-lg">Your {selectedService} appointment is set for:</p>
        <p className="mt-5 text-xl"><b>{monthNames[scheduleDate.getMonth()]} {scheduleDate.getDate()}, {scheduleDate.getFullYear()}</b> at <b>{convertToStandardTime(scheduleTime)}</b></p>
        <button onClick={() => close()} className="flex justify-center items-center font-bold mb-10 w-20 h-12 rounded-sm bg-forest-green text-white">Close</button>
      </div>
    </div>
  )
}