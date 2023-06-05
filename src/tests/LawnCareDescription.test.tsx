import React from 'react'
import { render, screen } from '@testing-library/react'
import LawnCareDescription from '../components/Description/LawnCareDescription.tsx'
import { MemoryRouter } from 'react-router-dom'

describe('<LawnCareDescription />', () => {

	function renderLawnCareDescription() {
		const utils = render(
		  	<MemoryRouter>
				<LawnCareDescription handleScheduleServiceClick={jest.fn()} />
		  	</MemoryRouter>
		)
	  
		return {
		  	...utils,
            description: screen.getByTestId('description'),
            backgroundImage: screen.getByTestId('background-image'),
            upperText: screen.getByText('The Best in the Business'),
            lowerText: screen.getByText('Your lawn and landscape cared for the way they should be'),
            galleryButton: screen.getByRole('button', { name: 'See Our Gallery' }),
            scheduleButton: screen.getByRole('button', { name: 'Schedule Service' })
		}
	}

    test('it should mount', () => {
        const { description } = renderLawnCareDescription()
        expect(description).toBeInTheDocument()
    })

    test('it should display the backround image', () => {
        const { backgroundImage } = renderLawnCareDescription()
        expect(backgroundImage).toBeInTheDocument()
    })

    test('it should display 2 sets of text on the image', () => {
        const { upperText, lowerText } = renderLawnCareDescription()
        expect(upperText).toBeInTheDocument()
        expect(lowerText).toBeInTheDocument()
    })

    test('it should display 2 buttons', () => {
        const { galleryButton, scheduleButton } = renderLawnCareDescription()
        expect(galleryButton).toBeInTheDocument()
        expect(scheduleButton).toBeInTheDocument()
    })
})