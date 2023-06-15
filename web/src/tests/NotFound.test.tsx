import React from 'react'
import { render, screen } from '@testing-library/react'
import NotFound from '../components/NotFound/NotFound.tsx'
import { MemoryRouter } from 'react-router-dom'

describe('<NotFound />', () => {

	function renderNotFound() {
		const utils = render(
		  	<MemoryRouter>
				<NotFound />
		  	</MemoryRouter>
		)
	  
		return {
		  	...utils,
            notFound: screen.getByTestId('not-found'),
            text: screen.getByText("Oops, that page doesn't exist"),
            button: screen.getByRole('button', { name: 'Return to Home Page' })
		}
	}

    test('it should mount', () => {
        const { notFound } = renderNotFound()
        expect(notFound).toBeInTheDocument()
    })

    test('it displays the explaining text', () => {
        const { text } = renderNotFound()
        expect(text).toBeInTheDocument()
    })

    test('it displays the button to return to the home page', () => {
        const { button } = renderNotFound()
        expect(button).toBeInTheDocument()
    })
})