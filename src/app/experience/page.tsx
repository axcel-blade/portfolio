import React from 'react'
import Header from '../components/Header'
//import Particles from "@/app/components/particles"
import MatrixRain from "../components/MatrixRain"
import ExperienceTimeline from "../experience/ExperienceTimeline"

export default function Experience() {
    return (
        <div>
            {/*Header*/}
            <Header/>

            {/*Background animation*/}
            {/*<Particles  className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>*/}
            <MatrixRain />

            {/*Body*/}
            <div className="flex flex-col items-center justify-center h-screen backdrop-blur-sm text-center">
                <div>
                    <span className='text-8xl'>
                        Experience
                    </span>
                </div><br />
                <div className='max-w-screen-xl mx-auto px-4'>
                    <ExperienceTimeline />
                </div>
            </div>
        </div>
    )
}