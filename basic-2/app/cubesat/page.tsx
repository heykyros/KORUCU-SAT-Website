'use client'
import Navbar from "../components/Navbar";
import { Canvas } from '@react-three/fiber';
import Earth from "@/public/Earth.png";
import Image from 'next/image'; 
import { Parallax, ParallaxLayer } from "@react-spring/parallax";
import TwinklingBackground from "../components/Twinkle";

export default function CubesatPage() {
    return(
        <>
            <TwinklingBackground />
            <Parallax pages={2}>
                <ParallaxLayer
                    offset={0}
                    speed={2.0}
                    factor={3}
                    style={{
                        backgroundImage: "url('/Earth.png')",
                        opacity: 0.8,
                        backgroundSize: "contain",
                        scale: "75%",
                        marginTop: "-20vh"
                    }}
                >
               
                </ParallaxLayer>
                <ParallaxLayer offset={0}
                speed={2.0}
                factor={3}
    
                style={{
                    backgroundImage: "url('/Satellite.png')",
                    opacity: 1,
                    backgroundSize: "contain",
                    scale: "20%",
                    marginTop: "-110vh",
                    marginLeft: "60vh"
                }}
                >
                    
                </ParallaxLayer>
           
                <ParallaxLayer
                speed={1}
                >
                    <Content />
                </ParallaxLayer>
            </Parallax>
        </>
    )
}

function Content()  {
    return (
        <>
        <Navbar />
                    <div className="w-screen h-auto flex flex-col items-center">
                        <div className="text-6xl drop-shadow-[0_35px_35px_rgba(0,0,0,1)] font-poppins font-bold text-center mt-[30vh] w-[45vh] rounded-3xl bg-gradient-to-br">KorucuSAT</div>        
                            <p className="text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,1)] font-poppins font-semibold text-center mt-[6vh] w-1/2 text-white ">
                                The Society’s flagship educational endeavor: A 3U CubeSAT developed to analyze the effect of the Sun on Earth’s ionosphere.
                            </p> 

                            <div className="flex w-2/3 h-[20vh] justify-between mt-[95vh]">
                                <div className="flex flex-col">
                                    <h1 className="text-5xl font-poppins font-bold">22</h1>
                                    <p className="text-2xl font-poppins font-medium">STUDENTS CURRENTLY INVOLVED</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-5xl font-poppins font-bold">200+</h1>
                                    <p className="text-2xl font-poppins font-medium">IMPACTED THROUGH OUTREACH</p>
                                </div>
                                <div className="flex flex-col">
                                    <h1 className="text-5xl font-poppins font-bold">3</h1>
                                    <p className="text-2xl font-poppins font-medium">OFFICIAL UNIVERSITY AFFILIATIONS</p>
                                </div>
                            </div>

                            <div className="mt-[50vh] w-2/3 flex flex-col items-center">
                            <h1 className="text-5xl font-poppins font-bold text-center">
                                OUR MOST <span className="bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent">AMBITIOUS</span> PROJECT YET
                            </h1>
                            <p className="mt-[10vh] text-xl font-poppins w-3/4 text-center">
                                KorucuSat aims to correlate the intensity of solar radiation in Earth’s upper ionosphere with both geomagnetic activity and plasma density. Currently, the satellite team is engaged in writing an application for NASA’s Cubesat Launch Initiative (CSLI) grant, which offers comprehensive funding for all launch-associated costs.
                            </p>
                            <p className="mt-[10vh] text-xl font-poppins w-3/4 text-center mb-[30vh]">
                                Beyond the science mission, the team has a strong educational mission. The team has initiated an outreach program for schools in the metro Atlanta area underrepresented in STEM fields.
                            </p>
                            </div>
                    </div>
                    
        </>

    )
}