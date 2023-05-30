import React, { useEffect } from 'react'
import './LawnCareDescription.css'
import Background from './assets/grass.webp'
import { Link } from 'react-router-dom'
//import { motion as m, AnimatePresence } from 'framer-motion'

type LawnCareDescriptionProps = {
	handleScheduleServiceClick: (service: string) => void
}

export default function LawnCareDescription({ handleScheduleServiceClick }: LawnCareDescriptionProps) {

    useEffect(() => {
        new Image().src = Background
    }, [])

    const onScheduleServiceButtonClick = (service: string) => {
        handleScheduleServiceClick(service)
    }

    return (
        <div className='flex relative w-full mt-7 min-w-[300px]'>
            <div className='flex flex-row relative w-full h-[400px] sm:h-[400px] md:h-[500px]'>
                <img src={Background} alt="lawn-Background" className='w-full bg-cover h-full relative z-10'/>
                <div className='absolute w-full z-[15] top-[15%]'>
                    <p className='p-0 m-0 text-center font-bold text-white text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl img-text-shadow'>The Best in the Business</p>
                </div>
            
                <div className='absolute flex flex-col justify-center items-center w-full z-[15] top-[40%]'>
                    <p className='p-0 m-0 text-center w-[75%] text-white sm:whitespace-nowrap xxs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl img-text-shadow font-[500]'>Your lawn and landscape cared for the way they should be</p>
                    <div className='flex flex-wrap justify-center relative w-full mt-[80px]'>
                        <button type='button' 
                        className='bg-button-green w-[135px] h-[60px] text-white font-[500] mr-[15px] img-text-shadow shadow-[0_0_10px_#000000] hover:scale-105 hover:duration-200 hover:shadow-[0_0_20px_#000000]'>
                            See Our Gallery
                        </button>
                        <button type='button' 
                        className='bg-button-green w-[135px] h-[60px] text-white font-[500] ml-[15px] img-text-shadow shadow-[0_0_10px_#000000] hover:scale-105 hover:duration-200 hover:shadow-[0_0_20px_#000000]'
                        onClick={() => onScheduleServiceButtonClick('none')}>
                            <Link to="/serviceSelection" className='flex justify-center items-center w-full h-full'>
                                Schedule Service
                            </Link>
                        </button>
                    </div>
                </div>
            </div>
        <div className='absolute w-full h-full' id="description-container"></div>
        </div>
    )
}