import React from 'react'
import LawnCareDescription from '../Description/LawnCareDescription.tsx'
import BusinessModel from '../BusinessModel/BusinessModel.tsx'

type HomePageProps = {
	setSelectedService: (service: string) => void
}

export default function Home({ setSelectedService }: HomePageProps ) {

	const handleServiceSelectionClick = (service: string) => {
		setSelectedService(service)
	}

    return (

		<React.Fragment data-testid="home">
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareDescription handleScheduleServiceClick={handleServiceSelectionClick}/>
			<BusinessModel />
		</React.Fragment>
	)
}