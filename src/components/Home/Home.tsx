import React from 'react'
//import LawnCareHeader from '../Header/LawnCareHeader.tsx'
import LawnCareDescription from '../Description/LawnCareDescription.tsx'
import BusinessModel from '../BusinessModel/BusinessModel.tsx'

export default function Home() {
    return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareDescription />
			<BusinessModel />
		</React.Fragment>
	)
}