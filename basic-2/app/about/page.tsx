'use client';
import { Canvas } from '@react-three/fiber'
import { Scene } from "../components/Scene"
import Navbar from '../components/Navbar';
import SimpleBar from 'simplebar-react';
import 'simplebar-react/dist/simplebar.min.css';
import Link from 'next/link';

export default function Mission() {
  return (
    <>
      <div className="relative w-[100vw] h-auto z-0 overflow-x-hidden">
        <div className="fixed top-0 left-0 w-full h-full z-0">
         
        </div>
        
        <SimpleBar style={{ maxHeight: '100vh', width: '100%' }}>
          <div className="relative w-full h-auto flex flex-col items-center p-2 overflow-x-hidden z-10">
            <Navbar />
            {/* top area */}
            <h1 className='text-6xl mt-8 font-poppins font-semibold'>About Us</h1>
            <p className="my-[8vh] text-xl font-poppins w-1/2 text-center text-gray-400">
              ASFSA is dedicated to cultivating the next generation of space explorers, engineers, and scientists. Our main objective is to equip our members with the necessary resources, tools, knowledge, and skills to pursue astronomical projects that further their understanding of the universe.
            </p>
            
          {/* title above cards */}
          <h3 className="text-3xl w-3/4 font-poppins text-button-purple font-semibold">OUR MISSION</h3>
          <h1 className="text-5xl w-3/4 mt-6 mb-[6vh] font-poppins font-bold">Astronomy through creation <br />and connection.</h1>

            {/* 4 cards in a row container */}
            <div className="flex gap-4 sm:w-full xl:w-3/4 h-auto min-h-[200px]">
              <div className="w-1/4 h-min-[200px] flex flex-col bg-gradient-to-r from-gray-50/20 to-gray-50/10 p-6 rounded-2xl backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-button-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9.75 3.104v5.714a2.25 2.25 0 0 1-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 0 1 4.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0 1 12 15a9.065 9.065 0 0 0-6.23-.693L5 14.5m14.8.8 1.402 1.402c1.232 1.232.65 3.318-1.067 3.611A48.309 48.309 0 0 1 12 21c-2.773 0-5.491-.235-8.135-.687-1.718-.293-2.3-2.379-1.067-3.61L5 14.5" />
                </svg>
                <h1 className="text-lg font-semibold font-poppins mt-2">Promote STEM Engagement</h1>  
                <p className="text-md font-poppins mt-2">Through outreach and collaboration, the Astronomy Society strives to expand its impact, promote a passion for STEM, and make meaningful contributions to the broader scientific community.</p>
              </div>

              <div className="w-1/4 h-min-[200px] flex flex-col bg-gradient-to-r from-gray-50/20 to-gray-50/10 p-6 rounded-2xl backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-button-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M20.25 8.511c.884.284 1.5 1.128 1.5 2.097v4.286c0 1.136-.847 2.1-1.98 2.193-.34.027-.68.052-1.02.072v3.091l-3-3c-1.354 0-2.694-.055-4.02-.163a2.115 2.115 0 0 1-.825-.242m9.345-8.334a2.126 2.126 0 0 0-.476-.095 48.64 48.64 0 0 0-8.048 0c-1.131.094-1.976 1.057-1.976 2.192v4.286c0 .837.46 1.58 1.155 1.951m9.345-8.334V6.637c0-1.621-1.152-3.026-2.76-3.235A48.455 48.455 0 0 0 11.25 3c-2.115 0-4.198.137-6.24.402-1.608.209-2.76 1.614-2.76 3.235v6.226c0 1.621 1.152 3.026 2.76 3.235.577.075 1.157.14 1.74.194V21l4.155-4.155" />
                </svg>

                <h1 className="text-lg font-semibold font-poppins mt-2">Build a Connected Society</h1>  
                <p className="text-md font-poppins mt-2">We are dedicated to building a network of students, alumni, and faculty who collaborate on projects. Our team regularly meets at astronomy events, fostering ongoing connections and collaboration.</p>
              </div>

              <div className="w-1/4 h-min-[200px] flex flex-col bg-gradient-to-r from-gray-50/20 to-gray-50/10 p-6 rounded-2xl backdrop-blur">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="size-8 stroke-button-purple">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10.05 4.575a1.575 1.575 0 1 0-3.15 0v3m3.15-3v-1.5a1.575 1.575 0 0 1 3.15 0v1.5m-3.15 0 .075 5.925m3.075.75V4.575m0 0a1.575 1.575 0 0 1 3.15 0V15M6.9 7.575a1.575 1.575 0 1 0-3.15 0v8.175a6.75 6.75 0 0 0 6.75 6.75h2.018a5.25 5.25 0 0 0 3.712-1.538l1.732-1.732a5.25 5.25 0 0 0 1.538-3.712l.003-2.024a.668.668 0 0 1 .198-.471 1.575 1.575 0 1 0-2.228-2.228 3.818 3.818 0 0 0-1.12 2.687M6.9 7.575V12m6.27 4.318A4.49 4.49 0 0 1 16.35 15m.002 0h-.002" />
                </svg>
                <h1 className="text-lg font-semibold font-poppins mt-2">Foster a Diverse Community</h1>  
                <p className="text-md font-poppins mt-2">The Society seeks to build a diverse and enthusiastic community that actively contributes to scientific discovery and develops essential skills and knowledge for addressing global challenges.</p>
              </div>

            
            </div>


          </div>
        </SimpleBar>
      </div>
    </>
  );
}
