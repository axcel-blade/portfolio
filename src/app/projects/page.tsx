import React from 'react'
import Header from '../components/header'
import Particles from '../components/particles'

export default function Projects() {
    return (
        <div>
            <main>
                <Header/>
                <Particles className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>
                <h1>Projects</h1>
            </main>
        </div>
    )
}
