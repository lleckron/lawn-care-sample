import React from 'react'
import { render, screen } from '@testing-library/react'
import Home from '../components/Home/Home.tsx'
import { MemoryRouter } from 'react-router-dom'

describe('<Home />', () => {

    function renderHome() {
		const utils = render(
		  	<MemoryRouter>
				<Home setSelectedService={jest.fn()}/>
		  	</MemoryRouter>
		)
	  
		return {
		  	...utils,
            description: screen.getByTestId('description') ,
            businessModel: screen.getByTestId('business-model')
		}
	}

    test('it should render with its child components', () => {
        const { description, businessModel } = renderHome()
        expect(description).toBeInTheDocument()
		expect(businessModel).toBeInTheDocument()
    })

})