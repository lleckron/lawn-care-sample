import React/*, { useState }*/ from 'react'
import './DescriptionCard.css'

type DescriptionCardProps = {
    title: string,
    description: string
}


export default function DescriptionCard( props: DescriptionCardProps ) {
    const { title, description } = props
    return (
        <div className='flex flex-col flex-[1_0_25%] mr-[15px] ml-[15px] sm:mr-[30px] sm:ml-[30px] bg-light-gray rounded-xl max-w-[100px] sm:max-w-[150px] md:max-w-[200px] h-[150px] sm:h-[200px] md:h-[250px] shadow-[0_0_15px_#000000] hover:cursor-pointer hover:scale-105 hover:duration-200 hover:shadow-[0_0_25px_#000000]'>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}

