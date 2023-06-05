import React from 'react'
import { render, screen } from '@testing-library/react';
import App from '../App';
import { MemoryRouter } from 'react-router-dom'

describe('<App />', () => {
    
    function renderApp() {
		const utils = render(
		  	<MemoryRouter>
				<App />
		  	</MemoryRouter>
		)
	  
		return {
		  	...utils,
		  	lawnCareHeader: screen.getByTestId('lawn-care-header'),
            description: screen.getByTestId('description'),
            descriptionCard: screen.getAllByTestId('description-card'),
		}
	}

    test('it should render each component present on the Home page', () => {
        const { lawnCareHeader, description, descriptionCard } = renderApp()
        expect(lawnCareHeader).toBeInTheDocument()
        expect(description).toBeInTheDocument()
        
        for(const card of descriptionCard) {
            expect(card).toBeInTheDocument()
        }
    })
})