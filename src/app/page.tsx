import Header from "./components/header";
import Particles from "./components/particles";

export default function Home() {
  return (
    <div>
      {/*Main*/}
      <main 
      className="flex flex-col items-center justify-center h-screen text-center"
      >
        {/*Header*/}
        <Header/>
        {/*Background Particles*/}
        <Particles
        className="absolute inset-0 -z-10 animate-fade-in"
        quantity={100}
        />
        <div>
          <span 
          className="text-8xl"
          >
            Joseph Fernando
          </span>
          <br />
          <br />
          <span
          className="text-4xl"
          >
            Software Engineer
          </span>
        </div>
      </main>
    </div>
  );
}
