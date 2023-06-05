import React, { useEffect } from "react"
import './AboutUs.css'
import Team from './assets/team.webp'

export default function AboutUs() {

    useEffect(() => {
        new Image().src = Team
    }, [])

    return (
        <div className="flex flex-col items-center w-[75%] mt-7 ml-auto mr-auto pb-10"
        data-testid="about-us">
            <div className="flex flex-row relative w-[310px] sm:w-[600px] h-[225px] sm:h-[300px]">
                <img src={Team} alt="team" className="w-full bg-cover h-full relative z-10" />
            </div>
            <div className="flex flex-col relative w-full mt-10">
                <p className="text-sm sm:text-lg ">
                    <span className="ml-10"></span> Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                    Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                    Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                    Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                </p>
                
                <p className="text-sm sm:text-lg mt-5">
                    <span className="ml-10"></span>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, 
                    eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. 
                    Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui 
                    ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, 
                    adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. 
                    Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? 
                    Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui 
                    dolorem eum fugiat quo voluptas nulla pariatur?
                </p>

                <div className="absolute h-full left-[-15px] border-l-4 border-l-forest-green"></div>
                <div className="absolute h-full right-[-15px] border-r-4 border-r-forest-green"></div>
            </div>
        </div>
    )
}