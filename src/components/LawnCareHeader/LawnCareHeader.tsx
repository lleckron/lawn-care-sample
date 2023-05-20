import React, { useState } from 'react'
import './LawnCareHeader.css'
import { ServicesObj } from '../../models/services.js'
import phone from './assets/phone.png'
import email from './assets/email.png'
import { motion as m, AnimatePresence } from 'framer-motion'


export default function LawnCareHeader() {

    const[showServices, setShowServices] = useState(false)
    const[hamburgerMenuExpand, setHamburgerMenuExpand] = useState(false)

    function toggleShowServices(state: boolean) {
        setShowServices(state)
    }

    function toggleHamburgerMenu() {
        setHamburgerMenuExpand(!hamburgerMenuExpand)
    }

    const menuAnimation = {
        initial: {height: 0, opacity: 0},
        animate: {height: '3rem', opacity: 1},
        exit: {height: 0, opacity: 0},
        transition: {duration: .3, ease: "easeInOut"},
    }



    function ServicesMenu() {
        const services = ServicesObj()

        return (
            <div id="services-menu" 
            className='absolute w-[200px] top-[70%]' 
            onMouseOver={() => toggleShowServices(false)} 
            onMouseLeave={() => toggleShowServices(false)}>
                <ul className='text-center custom-shadow bg-white rounded-md'>
                {services.map((data, index) => (
                    <li className='flex justify-center items-center h-12 bg-white first:rounded-t-md last:rounded-b-md hover:bg-light-gray services' key={index}>
                        {data.name}
                    </li>
                ))}
                </ul>
            </div>
        )
    }

    return (
    	<header className="flex flex-col justify-center items-center min-w-[350px] w-full h-28 bg-forest-green custom-shadow">

            <div className='bg-white w-full min-w-[300px] h-8'>
                <div className='flex justify-center items-end '>
                    <div className='flex flex-row justify-center items-center'>
                        <img src={phone} alt="phone" className='h-5 xxs:ml-1 sm:ml-5 xxs:mr-1 sm:mr-2 mt-1'/>
                        <p className='xxs:text-xs sm:text-base'>(765)-123-4567</p>
                    </div>
                    <div className='flex flex-row justify-center items-center mr-2 ml-6'>
                        <img src={email} alt="email" className='h-5 xxs:ml-1 sm:ml-5 xxs:mr-2 sm:mr-3 mt-1'/>
                        <p className='xxs:text-xs sm:text-base'>samplebusiness@email.com</p>
                    </div>
                </div>
            </div>

            <nav className="flex flex-row justify-between relative w-full h-full ml-auto mr-auto pl-8 pr-8">

                <div className="flex justify-center items-center h-full w-3/6">
		    		<h1 className='flex justify-center items-center h-full min-w-[310px] text-neon-green font-bold text-3xl sm:text-4xl ml-12 sm:ml-0 title-text-shadow hover:cursor-pointer'>Sample Lawn Care</h1>
                </div>

		    	<div id="header-menu-full" className="flex justify-center items-center h-full w-3/6">
                    <div className='flex justify-center items-center h-full w-2/6 '>
                        <span className='flex justify-center items-center h-[40px] w-100px rounded-md hover:cursor-pointer hover:bg-dark-forest-green'>
                            <p className='text-xl text-white link-text-shadow '>Home</p>
                        </span>
                    </div>
                    <div className='flex justify-center items-center h-full w-2/6 '>
                        <span className='flex justify-center items-center h-[40px] w-100px rounded-md hover:cursor-pointer hover:bg-dark-forest-green'>
                            <p className='text-xl text-white link-text-shadow hover:cursor-pointer'>About Us</p>
                        </span>
                    </div>
                    <div className='flex justify-center items-center relative h-full w-2/6 hover:cursor-pointer '>
                        <span id="services-span" className='flex justify-center items-center h-[40px] w-100px rounded-md hover:cursor-pointer hover:bg-dark-forest-green'
                        onMouseOver={() => toggleShowServices(true)}
                        onMouseLeave={() => toggleShowServices(false)}>
                            <p className='text-xl text-white link-text-shadow '>Services</p>
                            <i className='arrow hover:cursor-pointer'></i>
                        </span>
                        {showServices && <ServicesMenu />}
                    </div>
                </div>

                <div id="hamburger-menu" 
                className='flex relative flex-col justify-center items-center w-8 h-full'
                onClick={toggleHamburgerMenu}>
                    <div className='flex bg-white h-1 w-full rounded-sm mt-1 mb-1 '></div>
                    <div className='flex bg-white h-1 w-full rounded-sm mt-1 mb-1 '></div>
                    <div className='flex bg-white h-1 w-full rounded-sm mt-1 mb-1 '></div>
                </div>
                <AnimatePresence>
                    {hamburgerMenuExpand && (  
                        <m.div className='absolute w-full left-0 top-full'
                        initial={{height: 0, background: 'rgb(176 176 176)'}}
                        animate={{height: 'auto'}}
                        exit={{height: 0}}
                        transition={{duration: .3, ease: "easeInOut"}}
                        key="hamburgerMenu">
                            <m.p {...menuAnimation} key="p-1" className='flex justify-center items-center h-12 border-b-[1px] border-b-white bg-medium-gray'>Home</m.p>
                            <m.p {...menuAnimation} key="p-2" className='flex justify-center items-center h-12 border-b-[1px] border-b-white bg-medium-gray'>About Us</m.p>
                            <m.p {...menuAnimation} key="p-3" className='flex justify-center items-center h-12 border-b-[2px] border-b-black bg-medium-gray'>Services</m.p>
                        </m.div>
                    )}
                </AnimatePresence>
            </nav>
        </header>
	)
}