import React from 'react'
import LawnCareDescription from '../Description/LawnCareDescription.tsx'
import BusinessModel from '../BusinessModel/BusinessModel.tsx'

type HomePageProps = {
	setSelectedService: (service: null) => void
}

export default function Home({ setSelectedService }: HomePageProps ) {

	const handleServiceSelectionClick = (service: null) => {
		setSelectedService(service)
	}

    return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareDescription handleOnScheduleServiceButtonClick={handleServiceSelectionClick}/>
			<BusinessModel />
		</React.Fragment>
	)
}