import React from 'react'
import LawnCareDescription from '../Description/LawnCareDescription.tsx'
import BusinessModel from '../BusinessModel/BusinessModel.tsx'

type HomePageProps = {
	setSelectedServiceType: (service: string) => void
}

export default function Home({ setSelectedServiceType }: HomePageProps ) {

	const handleServiceSelectionClick = (service: string) => {
		setSelectedServiceType(service)
	}

    return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareDescription handleScheduleServiceClick={handleServiceSelectionClick}/>
			<BusinessModel />
		</React.Fragment>
	)
}