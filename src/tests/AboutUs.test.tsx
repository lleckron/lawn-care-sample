import React from 'react'
import { render, screen } from '@testing-library/react'
import AboutUs from '../components/AboutUs/AboutUs.tsx'
import { MemoryRouter } from 'react-router-dom'

describe('<AboutUs />', () => {

    function renderAboutUs() {
		const utils = render(
		  	<MemoryRouter>
				<AboutUs />
		  	</MemoryRouter>
		)
	  
		return {
		  	...utils,
            aboutUs: screen.getByTestId('about-us'),
            image: screen.getByTestId('about-us-image'),
            article: screen.getByTestId('about-us-article'),
		}
	}

    test('it should mount', () => {
        const { aboutUs } = renderAboutUs()
        expect(aboutUs).toBeInTheDocument()
    })

    test('it should show the image', () => {
        const { image } = renderAboutUs()
        expect(image).toBeInTheDocument()
    })

    test('it should show the AboutUs article', () => {
        const { article } = renderAboutUs()
        expect(article).toBeInTheDocument()
    })
})