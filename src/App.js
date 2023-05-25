import './App.css'
import React from 'react'
import LawnCareHeader from './components/Header/LawnCareHeader.tsx'
//import LawnCareDescription from './components/Description/LawnCareDescription.tsx'
//import BusinessModel from './components/BusinessModel/BusinessModel.tsx'
import Home from './components/Home/Home'
import TestRoutes from './components/TestRoutes/TestRoutes.tsx'
import { Route, Routes } from 'react-router-dom'

function App() {
	return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>
			<LawnCareHeader />
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/testRoutes" element={<TestRoutes />} />
			</Routes>
		</React.Fragment>
	)
}

export default App
