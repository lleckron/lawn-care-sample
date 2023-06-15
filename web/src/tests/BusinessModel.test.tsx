import React from 'react'
import { render, screen } from '@testing-library/react'
import BusinessModel from '../components/BusinessModel/BusinessModel.tsx'
import { MemoryRouter } from 'react-router-dom'

describe('<BusinessModel />', () => {

    function renderBusinessModel() {
		const utils = render(
		  	<MemoryRouter>
				<BusinessModel />
		  	</MemoryRouter>
		)
	  
		return {
		  	...utils,
            businessModel: screen.getByTestId('business-model'),
            descriptionCards: screen.queryAllByTestId('description-card')
		}
	}

    test('it should render', () => {
        const { businessModel } = renderBusinessModel()
        expect(businessModel).toBeInTheDocument()
    })

    test('it should have 3 description cards', () => {
        const { descriptionCards } = renderBusinessModel()
        expect(descriptionCards.length).toEqual(3)
        
    })
})