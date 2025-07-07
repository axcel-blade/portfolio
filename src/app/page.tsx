import Header from "@/app/components/header"
import Particles from "@/app/components/particles"
import MatrixRain from "@/app/components/MatrixRain"
import { SocialIcon } from 'react-social-icons/component'
import 'react-social-icons/github'
import 'react-social-icons/linkedin'
import 'react-social-icons/email'

export default function Home() {
  return (
    <div>
      {/*Header*/}
      <Header/>

      {/*Background animation*/}
      {/*<Particles  className="absolute inset-0 -z-10 animate-fade-in" quantity={100}/>*/}
      <MatrixRain />
      
      {/*Main*/}
      <main  className="flex flex-col items-center justify-center h-screen text-center backdrop-blur-sm">
        {/*body*/}
        <div>
          <span  className="text-8xl">
            Joseph Fernando
          </span>
          <br />
          <br />
          <span  className="text-4xl">
            Software Engineer
          </span><br />

          {/*Socials*/}
          <div className="flex py-4 justify-center">
              <div className="px-4">
                <SocialIcon network="github" url="https://www.github.com/axcel-blade"/>
              </div>
              <div className="px-4">
                <SocialIcon network="linkedin" url="https://www.linkedin.com/in/srikanth-fernando" />
              </div>
              <div className="px-4">
                <SocialIcon network="email" url="mailto:srikanthfernando3@gmail.com" />
              </div>
          </div>
          <div className="py-4">
            <a href="#" className="px-4 py-2 border border-white rounded-lg hover:bg-white hover:text-black">
              Download CV
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
