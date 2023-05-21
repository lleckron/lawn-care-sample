import React/*, { useState }*/ from 'react'
import './LawnCareDescription.css'
import background from './assets/grass.avif'
//import { motion as m, AnimatePresence } from 'framer-motion'

export default function LawnCareHeader() {



    return (
        <div className='flex relative w-full mt-7 min-w-[300px]' id="description-container">
            <div className='flex flex-row relative w-full h-[400px] sm:h-[500px] md:h-[650px]'>
                <img src={background} alt="lawn-background" className='w-full bg-cover h-full relative z-10'/>
                <div className='absolute w-full z-[15] top-[15%]'>
                    <p className='p-0 m-0 text-center font-bold text-white text-[34px] sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl img-text-shadow'>The Best in the Business</p>
                </div>
            
                <div className='absolute w-full z-[15] top-[40%]'>
                    <p className='p-0 m-0 text-center text-white xxs:text-base sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl img-text-shadow'>See what we can do for you</p>
                    <div className='w-full'>
                        
                    </div>
                </div>
            </div>
        </div>
    )
}