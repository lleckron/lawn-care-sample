import React from 'react'
import { render, screen, fireEvent } from '@testing-library/react'
import DescriptionCard from './DescriptionCard';
import { MemoryRouter } from 'react-router-dom'

let mockedProps = {
    title: 'test service',
    description: 'a short description of the test service',
    imageSrc: './not-a-real-image.png',
    imageAlt: 'not a real image',
    hoverEffect: true,
    onClick: jest.fn()
}

describe('<DescriptionCard />', () => {

    function renderDescriptionCard( ) {

		const utils = render(
		  	<MemoryRouter>
				<DescriptionCard title={mockedProps.title}
                description={mockedProps.description}
                imageSrc={mockedProps.imageSrc}
                imageAlt={mockedProps.imageAlt}
                hoverEffect={mockedProps.hoverEffect}
                onClick={mockedProps.onClick} />
		  	</MemoryRouter>
		)
	  
		return {
		    ...utils,
            descriptionCard: screen.getByTestId('description-card'),
            image: screen.getByTestId('description-card-image'),
            title: screen.getByText('test service'),
            description: screen.getByText('a short description of the test service')
		}
	}

    test('it should mount', () => {
        const { descriptionCard } = renderDescriptionCard()
  	  	expect(descriptionCard).toBeInTheDocument()
    })

    test('it displays the associated image', () => {
        const { image } = renderDescriptionCard()
        expect(image).toBeInTheDocument()
    })

    test('it displays the title', () => {
        const { title } = renderDescriptionCard()
        expect(title).toBeInTheDocument()
    })

    test('it displays the description', () => {
        const { description } = renderDescriptionCard()
        expect(description).toBeInTheDocument()
    })

    test('it displays a hover effect, if the condition is true', () => {
        const { descriptionCard } = renderDescriptionCard()

        fireEvent.mouseOver(descriptionCard)
        expect(descriptionCard).toHaveClass('hover:scale-105')
    })

    test('it does not display a hover effect, if the condition is false', () => {
        mockedProps.hoverEffect = false
        const { descriptionCard } = renderDescriptionCard()

        fireEvent.mouseOver(descriptionCard)
        expect(descriptionCard).not.toHaveClass('hover:scale-105')
    })

    test('it responds to being clicked, for cards with an onclick effect', () => {
        const { descriptionCard } = renderDescriptionCard()

        fireEvent.click(descriptionCard)
        expect(mockedProps.onClick).toHaveBeenCalled()
    })
})