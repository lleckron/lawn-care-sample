import './App.css'
import React from 'react'
import LawnCareHeader from './components/Header/LawnCareHeader.tsx'
//import LawnCareDescription from './components/Description/LawnCareDescription.tsx'
//import BusinessModel from './components/BusinessModel/BusinessModel.tsx'
import Home from './components/Home/Home'
import AboutUs from './components/AboutUs/AboutUs.tsx'
import { Route, Routes } from 'react-router-dom'

export default function App() {
	return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>
			<LawnCareHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/aboutUs" element={<AboutUs />} />
			</Routes>
		</React.Fragment>
	)
}