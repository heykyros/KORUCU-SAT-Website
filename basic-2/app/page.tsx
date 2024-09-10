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
        
        <div className="relative w-full h-auto flex flex-col items-center p-2 overflow-hidden z-10">
          <Navbar />
          <div className='w-[800px] flex flex-col place-self-start mt-16 h-auto'>
            <div className='hero-page-content ml-[105px] flex flex-col'>
              <h1 className='flex-row font-semibold leading-[90px] font-poppins text-[75px]'>
                Astronomy Society of <span className='bg-gradient-to-r from-custom-purple to-custom-orange bg-clip-text text-transparent'>FSA</span>
              </h1>
              <h2 className='mt-[10px] font-poppins w-2/3 text-gray-300'>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.
              </h2>
              <button className='bg-button-purple mt-[30px] w-[150px] justify-center items-center h-[45px] rounded-[24px] flex'>
                <h1 className='text-[15px] w-full font-semibold'>Learn More</h1>
              </button>
            </div>
          </div>
          <h1 className="font-poppins font-semibold mt-[100vh] text-neutral-100 text-6xl text-center w-1/2" id="who-we-are">Who We Are</h1>
          <h3 className="font-poppins text-2xl w-2/3 text-center mt-[5vh] leading-10">
            The Astronomy Society of Fulton Science Academy (ASFSA) is a community composed of current students, alumni, faculty, and affiliated experts passionate about exploring space. ASFSA is dedicated to inspiring and educating the next generation of scientists, engineers, and informed global citizens through immersive experiences in space exploration and astronomical research.
          </h3>
          <Link href="/mission" className="font-poppins text-button-purple text-2xl mt-[6vh] w-1/2 flex justify-center items-center">OUR MISSION  
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 ml-2">
              <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
            </svg>
          </Link>
          <h1 className="font-poppins font-semibold mt-[40vh] text-neutral-100 text-5xl text-center w-1/2" id="projects">Projects</h1>
          <div className="mt-[10vh] w-4/6 grid sm:grid-cols-1 xl:grid-cols-2 justify-items-center">
            {/* meet innovation */}
            <div className="flex flex-col justify-start h-[30vh] w-[50vh] items-start">
              <h3 className="text-[20px] font-poppins text-gray-300">Meet Innovation</h3>
              <h1 className="text-[70px] mt-[0.5vh] text-neutral-100 font-semibold">Korucu Sat</h1>
              <Link href="/korucusat" className="font-poppins text-custom-orange text-[20px] text-2xl mt-8 flex justify-center items-center">LEARN MORE  
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 ml-2">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                </svg>
              </Link>
            </div>
            <div className='flex flex-col font-poppins font-medium text-[24px]'>
            <h1>Korucu Sat is a lorem ispum blah blah sdfjkasdfj asdfjkasd fkasjdf ksjdf ksdjf ksdf ksdf ksdf ksdf</h1>
            </div>
            <div className="flex flex-col justify-start h-[90vh] w-[100vh] ml-48 mt-[40vh]">
              <div className="items-start ml-[20vh]">
                <h3 className='text-gray-300 text-[20px]'>Where we started</h3>
                <h1 className="text-[70px] mt-[0.5vh] text-neutral-100 font-semibold">Astrophotography</h1>
                <Link href="/astrophotography" className="font-poppins text-button-purple text-[20px] text-2xl mt-8 flex items-center">GALLERY
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={2} stroke="currentColor" className="size-6 ml-2">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 6H5.25A2.25 2.25 0 0 0 3 8.25v10.5A2.25 2.25 0 0 0 5.25 21h10.5A2.25 2.25 0 0 0 18 18.75V10.5m-10.5 6L21 3m0 0h-5.25M21 3v5.25" />
                  </svg>
                </Link>
              </div>
              <div className="ml-[5vh] glass-card w-[120vh] mt-16 bg-glass-gray/20 h-[40vh] backdrop-blur-sm p-8 rounded-3xl border-2 border-button-purple/50 flex flex-col items-center">
                <h1 className="font-poppins font-semibold text-neutral-100 text-3xl">Lorem ispum</h1>
                <p className="font-poppins text-neutral-100 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                <h1 className="font-poppins font-semibold mt-[60vh] text text-neutral-100 text-[60px] text-center w-1/2">And More</h1>
                <div className="glass-card min-h-[40vh] bg-glass-gray/20 backdrop-blur-sm p-8 rounded-3xl m-4 border-2 border-custom-orange/50 flex flex-col items-center">
                  <h1 className="font-poppins font-semibold text-neutral-100 text-3xl">Our Vision</h1>
                  <p className="font-poppins text-neutral-100 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                </div>
              </div>                
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
