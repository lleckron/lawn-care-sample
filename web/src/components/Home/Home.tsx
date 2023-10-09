import React from 'react'
import LawnCareDescription from '../Description/LawnCareDescription.tsx'
import BusinessModel from '../BusinessModel/BusinessModel.tsx'
import AppointmentConfirmModal from '../AppointmentConfirmModal/AppointmentConfirmModal.tsx'

type HomePageProps = {
	setSelectedServiceType: (service: string) => void,
	appointmentConfirmed: boolean,
	setAppointmentConfirmed: (arg: boolean) => void,
	appointmentTime: String,
	appointmentDate: Date,
	selectedService: String
}

export default function Home(props: HomePageProps ) {
	const { setSelectedServiceType, appointmentConfirmed, setAppointmentConfirmed, appointmentTime, appointmentDate, selectedService } = props

	const handleServiceSelectionClick = (service: string) => {
		setSelectedServiceType(service)
	}

    return (

		<React.Fragment>
			<link href="/dist/output.css" rel="stylesheet"></link>

			{appointmentConfirmed && <AppointmentConfirmModal 
				scheduleDate={appointmentDate}
				scheduleTime={appointmentTime}
				selectedService={selectedService}
				close={() => setAppointmentConfirmed(false)}
			/>}
			<LawnCareDescription handleScheduleServiceClick={handleServiceSelectionClick}/>
			<BusinessModel />

		</React.Fragment>
	)
}