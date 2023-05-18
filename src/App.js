import './App.css';
import React from 'react';
import LawnCareHeader from './components/LawnCareHeader/LawnCareHeader.tsx';

function App() {
	return (
		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareHeader />
			<div className='container'>
				<p>Test</p>
			</div>
		</React.Fragment>
	)
		
		
}

export default App;
