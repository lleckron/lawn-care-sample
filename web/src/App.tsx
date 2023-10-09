import './App.css'
import React, { useState } from 'react'
import LawnCareHeader from './components/Header/LawnCareHeader.tsx'
import Home from './components/Home/Home.tsx'
import AboutUs from './components/AboutUs/AboutUs.tsx'
import NotFound from './components/NotFound/NotFound.tsx'
import ServiceSelection from './components/ServiceSelection/ServiceSelection.tsx'
import ScheduleService from './components/ScheduleService/ScheduleService.tsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	const [selectedServiceType, setSelectedServiceType] = useState('none')
	const [selectedService, setSelectedService] = useState(String)
	const [appointmentConfirmed, setAppointmentConfirmed] = useState(false)
	const [appointmentTime, setAppointmentTime] = useState<String>('')
	const [appointmentDate, setAppointmentDate] = useState<Date>(new Date())

	return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>
			<LawnCareHeader setSelectedServiceType={setSelectedServiceType}/>
			<Routes>
				<Route path="/" element={<Home setSelectedServiceType={setSelectedServiceType} appointmentConfirmed={appointmentConfirmed} setAppointmentConfirmed={setAppointmentConfirmed} selectedService={selectedService} appointmentTime={appointmentTime} appointmentDate={appointmentDate}/>} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/serviceSelection" element={<ServiceSelection selectedServiceType={selectedServiceType} setSelectedServiceType={setSelectedServiceType} setSelectedService={setSelectedService}/>} />
				<Route path="/scheduleService" element={<ScheduleService service={selectedService} setAppointmentConfirmed={setAppointmentConfirmed} setAppointmentTime={setAppointmentTime} setAppointmentDate={setAppointmentDate}/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</React.Fragment>
	)
}