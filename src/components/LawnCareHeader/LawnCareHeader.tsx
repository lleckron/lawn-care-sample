import React, { useState } from 'react'
import './LawnCareHeader.css'
import { ServicesObj } from '../../models/services.js'


function LawnCareHeader() {

    const[showServices, setShowServices] = useState(true)

    function toggleShowServices(state: boolean) {
        setShowServices(state)
    }

    function ServicesMenu() {
        const services = ServicesObj()

        return (
            <div id="services-menu" 
                className='absolute w-[200px] top-3/4' 
                onMouseOver={() => toggleShowServices(true)} 
                onMouseLeave={() => toggleShowServices(false)}>
                <ul className='text-center bg-white even:bg-light-gray rounded-md custom-shadow'>
                {services.map(data => (
                    <li>{data.name}</li>
                ))}
                </ul>
            </div>
        )
    }

    return (
    	<header className="flex justify-center items-center mt-8 mr-auto mb-auto ml-auto w-4/5 min-w-[650px] h-20 bg-forest-green rounded-xl custom-shadow">
            <nav className="flex flex-row justify-between w-full h-full ml-auto mr-auto pl-8 pr-8">

                <div className="flex justify-center items-center h-full w-3/6">
		    		<h1 className='flex justify-center items-center h-full min-w-[310px] text-neon-green font-bold text-4xl title-text-shadow hover:cursor-pointer'>Sample Lawn Care</h1>
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

                <div id="hamburger-menu">
                    <input id="menu-toggle" type="checkbox" />
                    <ul id="header-menu-shrink">
                        <li>One</li>
                        <li>Two</li>
                        <li>Three</li>
                    </ul>
                </div>

            </nav>
        </header>
	)
}


export default LawnCareHeader