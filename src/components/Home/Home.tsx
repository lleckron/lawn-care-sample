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

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			<LawnCareDescription handleOnScheduleServiceButtonClick={handleServiceSelectionClick}/>
			<BusinessModel />
		</React.Fragment>
	)
}