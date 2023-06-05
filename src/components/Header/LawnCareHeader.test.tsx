import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import LawnCareHeader from './LawnCareHeader'
import { MemoryRouter } from 'react-router-dom'
import { ServicesObj } from '../../models/services.js'

describe('<LawnCareHeader />', () => {

	function renderLawnCareHeader() {
		const utils = render(
		  	<MemoryRouter>
				<LawnCareHeader setSelectedService={jest.fn()} />
		  	</MemoryRouter>
		)
	  
		return {
		  ...utils,
		  	lawnCareHeader: screen.getByTestId('lawn-care-header'),
		  	companyName: screen.getByText('Sample Lawn Care'),
			companyPhone: screen.getByText('(765)-123-4567'),
			companyEmail: screen.getByText('samplebusiness@email.com'),
			navHomeLink: screen.getByText('Home'),
			navAboutUsLink: screen.getByText('About Us'),
			navServicesLink: screen.getByText('Services'),
		}
	}

	function getServicesList() {
		const servicesObject = ServicesObj()
		const servicesList: string[] = []
		servicesObject.map((data: { type: string } ) => (
			servicesList.push(data.type)
		))
		return servicesList
	}

  	test('it should mount', () => {
		const { lawnCareHeader } = renderLawnCareHeader()
  	  	expect(lawnCareHeader).toBeInTheDocument()
  	})

	test('it renders the Company name, phone number, and email', () => {
		const { companyName, companyPhone, companyEmail } = renderLawnCareHeader()

		expect(companyName).toBeInTheDocument()
		expect(companyPhone).toBeInTheDocument()
		expect(companyEmail).toBeInTheDocument()
	})

	test('it renders the clickable nav links', () => {
		const { navHomeLink, navAboutUsLink, navServicesLink } = renderLawnCareHeader()

		expect(navHomeLink).toBeInTheDocument()
		expect(navAboutUsLink).toBeInTheDocument()
		expect(navServicesLink).toBeInTheDocument()
	})

	test('it displays the Services list when hovering over Services nav link', () => {
		const { navServicesLink } = renderLawnCareHeader()
		fireEvent.mouseEnter(navServicesLink)

		const servicesMenu = screen.getByTestId('services-menu')
		expect(servicesMenu).toBeInTheDocument()

		const servicesList = getServicesList()
		for(const service of servicesList) {
			const serviceText = screen.getByText(service)
			expect(serviceText).toBeInTheDocument()
		}
	})
})