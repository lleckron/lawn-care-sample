import React/*, { useState }*/ from 'react'

type DescriptionCardProps = {
    title: string,
    description: string
}


export default function DescriptionCard( props: DescriptionCardProps ) {
    const { title, description } = props
    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}