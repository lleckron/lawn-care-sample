import './App.css'
import React from 'react'
import LawnCareHeader from './components/Header/LawnCareHeader.tsx'
import LawnCareDescription from './components/Description/LawnCareDescription.tsx'
import BusinessModel from './components/BusinessModel/BusinessModel.tsx'

function App() {
	return (
		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareHeader />
			<LawnCareDescription />
			<BusinessModel />
		</React.Fragment>
	)
}

export default App
