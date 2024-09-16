'use client';
import { Canvas } from '@react-three/fiber';
import { Scene } from "../app/components/Scene";
import Navbar from '../app/components/Navbar';
import Link from 'next/link';

export default function Home() {
  return (
    <>
      <div className="relative w-[100vw] h-[100vh] z-0">
        <div className="fixed top-0 left-0 w-full h-full z-0">
          <Canvas camera={{ fov: 100, near: 0.1, far: 100, position: [8, 4, 5] }} style={{ width: '100%', height: '100%' }}>
            <Scene />
          </Canvas>
        </div>
        
        {/* Navbar plus hero */}
        <div className="relative w-[100vw] h-auto flex flex-col items-center p-2 overflow-hidden z-10">
          <Navbar />
          <div className='w-full lg:w-[40vw] flex flex-col items-center lg:place-self-start mt-[20vh] lg:mt-16 h-auto'>
            <div className='lg:hero-page-content lg:ml-[10vw] flex flex-col items-center lg:items-start text-center lg:text-start'>
              <h1 className='flex-row font-semibold lg:leading-[10vh] font-poppins text-5xl lg:text-7xl mb-2 lg:mb-0'>
                Astronomy Society of <span className='bg-gradient-to-r from-custom-purple to-custom-orange bg-clip-text text-transparent'>FSA</span>
              </h1>
              <h2 className='mt-[10px] font-poppins w-2/3 text-lg text-gray-300'>
                Empowering the next generation of astronomers, regardless of background.
              </h2>
              <button className='bg-custom-purple mt-[30px] w-[150px] justify-center items-center h-[45px] rounded-[24px] flex' onClick={() => window.scrollTo({ top: 1150, behavior: "smooth" })}
>                <h1 className='text-[15px] w-full font-semibold'>Learn More</h1>
              </button>
            </div>
          </div>




          {/* Who we are description + Learn More */}
          <h1 className="font-poppins font-semibold mt-[50vh] lg:mt-[100vh] text-neutral-100 text-5xl lg:text-6xl text-center w-3/4 lg:w-1/2" id="who-we-are">Who We Are</h1>
          <h3 className="font-poppins text-lg lg:text-2xl w-3/4 lg:w-2/3 text-center mt-[5vh] leading-8 lg:leading-10">
            The Astronomy Society of Fulton Science Academy (ASFSA) is a community composed of current students, alumni, faculty, and affiliated experts passionate about exploring space. ASFSA is dedicated to inspiring and educating the next generation of scientists, engineers, and informed global citizens through immersive experiences in space exploration and astronomical research.
          </h3>
          <Link href="/about" className="font-poppins text-button-purple text-2xl mt-[6vh] w-1/2 flex justify-center items-center">OUR MISSION  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>



          {/* Projects Tab */}
          <h1 className="font-poppins font-semibold mt-[40vh] text-neutral-100 text-5xl text-center w-1/2" id="projects">Projects</h1>
          <div className="mt-16 lg:mt-[10vh] mb-[30vh] w-full p-2 lg:w-4/6 grid sm:grid-cols-1 lg:grid-cols-2 justify-items-center">
            {/* meet innovation */}
            <div className="flex flex-col justify-start lg:h-[30vh] mb-4 w-full  lg:w-[50vw] items-center lg:items-start">
              <h3 className="text-lg font-poppins text-gray-300">Meet Innovation</h3>
              <h1 className="text-5xl  lg:text-7xl mt-[0.5vh] text-neutral-100 font-semibold">Korucu Sat</h1>
              <Link href="/cubesat" className="font-poppins text-custom-orange text-[20px] text-2xl mt-4 lg:mt-8 flex justify-center items-center">LEARN MORE  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
            <div className='flex flex-col font-poppins font-medium text-xl p-4 text-center lg:text-start'>
            <h1>The Society’s flagship educational endeavor: A 3U CubeSAT developed to analyze the effect of the Sun on Earth’s ionosphere.</h1>
            </div>
             
            
          </div>
        </div>
      </div>
    </>
  );
}
