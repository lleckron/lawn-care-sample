import './App.css';
import React from 'react';
import LawnCareHeader from './components/LawnCareHeader/LawnCareHeader.tsx';
import LawnCareDescription from './components/LawnCareDescription/LawnCareDescription.tsx';

function App() {
	return (
		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareHeader />
			<LawnCareDescription />
		</React.Fragment>
	)
		
		
}

export default App;
