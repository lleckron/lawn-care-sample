import React from "react"
import { Link } from 'react-router-dom'

export default function NotFound() {

    return (
        <div className="flex flex-col justify-center items-center mt-40">
            <h2 className="font-bold text-2xl md:text-4xl lg:text-6xl min-w-[330px]">Oops, that page doesn't exist</h2>
            <button type="button" className="bg-forest-green rounded-lg mt-20 w-[75%] min-w-[210px] md:min-w-[560px] md:w-[50%] lg:w-[50%] h-14 text-white text-xl" >
                <Link to="/" className="flex justify-center items-center w-full h-full">
                    Return to Home Page
                </Link>
            </button>
        </div>
    )
}