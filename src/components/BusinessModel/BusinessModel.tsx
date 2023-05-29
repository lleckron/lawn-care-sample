import React from 'react'
import './BusinessModel.css'
import DescriptionCard from '../DescriptionCard/DescriptionCard'
import Efficient from './assets/hand-clock.png'
import Affordable from './assets/affordable.png'
import Reliable from './assets/reliable.png'

export default function BusinessModel() {

    return (
        <div className='flex flex-col md:flex-row justify-center items-center relative w-full mt-20 pb-20'>
            <DescriptionCard title='Efficient' 
            description="Fast, thorough service, delivering excellent results while being mindful of your time."
            imageSrc={Efficient}
            imageAlt='efficient'
            hoverEffect={false}/>

            <DescriptionCard title='Affordable' 
            description="Our commitment is to deliver high-quality lawn care services at prices that won't break the bank."
            imageSrc={Affordable}
            imageAlt='affordable'
            hoverEffect={false}/>

            <DescriptionCard title='Reliable' 
            description="Punctuality and professionalism through and through. Expect work that matches your vision."
            imageSrc={Reliable}
            imageAlt='hand clock'
            hoverEffect={false}/>
        </div>
    )
}