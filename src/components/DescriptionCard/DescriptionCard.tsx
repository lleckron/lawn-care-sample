import React, { useEffect, useRef } from 'react'
import './DescriptionCard.css'

type DescriptionCardProps = {
    title: string,
    description: string,
    imageSrc: string,
    imageAlt: string,
    hoverEffect: boolean
}


export default function DescriptionCard( props: DescriptionCardProps ) {
    const { title, description, imageSrc, imageAlt, hoverEffect } = props
    const descriptionCardRef = useRef<HTMLDivElement>(null)
    
    useEffect(() => {
        new Image().src = imageSrc
    }, [imageSrc])

    useEffect(() => {
        if(hoverEffect) {
            addHoverEffect()
        }
    }, [hoverEffect])


    function addHoverEffect() {
        if(descriptionCardRef.current) {
            descriptionCardRef.current.classList.add(
                'hover:scale-105',
                'hover:duration-200',
                'hover:shadow-[0_0_20px_#000000]',
                'hover:cursor-pointer'
              )
        }
    }

    return (
        <div className='flex flex-col mt-[30px] md:mr-[20px] md:ml-[20px] bg-white rounded-xl w-[250px] h-[250px] shadow-[0_0_7px_#000000]'
        ref={descriptionCardRef}>
            <div className='flex justify-center w-full h-[25%] mt-3'>
                <img src={imageSrc} alt={imageAlt} className='w-20 h-16'/>
            </div>
            <div className='flex flex-col justify-start items-center w-full h-[75%]'>
                <p className='relative text-center font-bold text-2xl top-0'>{ title }</p>
                <p className='relative text-center w-90% text-lg'>{ description }</p>
            </div>
        </div>
    )
}