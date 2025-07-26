import React from 'react'
import Header from '../components/Header'
{/*import Particles from "@/app/components/particles"*/}
import MatrixRain from '../components/MatrixRain'

export default function About() {
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
                        About Me
                    </span>
                </div><br />
                <div className='max-w-screen-xl mx-auto px-4'>
                    <span className='text-2xl'>
                        I am a passionate and versatile Software Engineering graduate from Curtin University, Perth, Australia. As a lifelong learner and explorer of technology, my journey has been shaped by a deep curiosity for systems, software, and real-world problem-solving.<br/>

                        With over five years of hands-on experience in IT and technical support, I bring a solid foundation in hardware maintenance, software troubleshooting, and network configuration—skills I developed while working as a Computer Technician in Sri Lanka. My professional experience also spans delivery and hospitality roles, reinforcing my adaptability, reliability, and strong work ethic.<br/>

                        My passion lies in crafting modern, scalable web applications using technologies like React.js, Next.js, Gatsby, and MongoDB. I enjoy bringing digital ideas to life through clean, maintainable code and thoughtful user experiences. Whether building static sites with Gatsby, server-rendered applications with Next.js, or dynamic interfaces with React, I aim to create solutions that are both elegant and impactful.<br/>

                        In addition to my frontend and backend development skills, I’m proficient in Java, Python, C#, the Microsoft Office Suite, and WordPress. I approach each project with creativity, precision, and a commitment to continuous learning.<br/>

                        Beyond the code, I believe in building technology that is inclusive, accessible, and meaningful. Every interaction matters—and I’m driven to create digital experiences that leave a positive mark.<br/>
                    </span>
                </div>
            </div>
        </div>
    )
}