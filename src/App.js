import './App.css'
import React, { useState } from 'react'
import LawnCareHeader from './components/Header/LawnCareHeader.tsx'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs.tsx'
import NotFound from './components/NotFound/NotFound.tsx'
import ServiceSelection from './components/ServiceSelection/ServiceSelection.tsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	const [selectedService, setSelectedService] = useState(null)

	return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>
			<LawnCareHeader setSelectedService={setSelectedService}/>
			<Routes>
				<Route path="/" element={<Home setSelectedService={setSelectedService}/>} />
				<Route path="/aboutUs" element={<AboutUs />} />
				<Route path="/serviceSelection" element={<ServiceSelection selectedService={selectedService}/>} />
				<Route path="*" element={<NotFound />} />
			</Routes>
		</React.Fragment>
	)
}