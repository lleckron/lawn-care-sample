import React/*, { useState }*/ from 'react'

export default function DescriptionCard({ title, description }) {

    return (
        <div>
            <p>{title}</p>
            <p>{description}</p>
        </div>
    )
}