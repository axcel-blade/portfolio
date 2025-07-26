import React from 'react'
import Header from '../components/Header'
import Particles from '../components/Particles'
import MatrixRain from '../components/MatrixRain'


export default function Contact() {
    return (
        <div>
            <Header/>
            {/*Background animation*/}
            <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
            <MatrixRain/>
            <h1>Contact</h1>
        </div>
    )
}
