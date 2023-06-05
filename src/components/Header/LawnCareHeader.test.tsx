import React from 'react'
import { render, screen } from '@testing-library/react'
import LawnCareHeader from './LawnCareHeader'
import { MemoryRouter } from 'react-router-dom'

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
			navServicesLink: screen.getByText('Services')
		}
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
})