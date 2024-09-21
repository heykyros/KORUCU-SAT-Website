'use client'
import Navbar from "../components/Navbar";
import Earth from "@/public/Earth.png";
import Image from 'next/image'; 
import { Parallax, ParallaxLayer, IParallax } from "@react-spring/parallax";
import TwinklingBackground from "../components/Twinkle";
import Moon from "@/public/moonbg.png";
import { useRef } from "react";
export default function CubesatNew() {
    const parallax = useRef<IParallax>(null)
    return(
        <>
            <TwinklingBackground />
            
                <Parallax ref={parallax} pages={2.5} >
                    <ParallaxLayer
                        offset={.6}
                        speed={2}
                        
                        style={
                            {display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',}
                        }
                        
                    >
                        <Image src={Earth} alt="Earth" className="w-[70vw] lg:mt-[40vh] min-w-[800px] lg:min-w-0 "/>
                    </ParallaxLayer>
                    {/* <ParallaxLayer
                        offset={1.99}
                        speed={-.2}
                        factor={.5}
                    >
                        <Image src={Moon} alt="Moon " className=" w-[200vw]  lg:w-[150vw]"/>
                    </ParallaxLayer> */}
                    {/* Parallax layer for the hero section of cubesat page */}
                    <ParallaxLayer
                        offset={0}
                        speed={0.1}
                        factor={1}
                    >  
                        <div className="w-screen h-full flex flex-col items-center">
                            <Navbar />
                            <div className="text-6xl drop-shadow-[0_35px_35px_rgba(0,0,0,1)] font-poppins font-bold text-center mt-[10vh] lg:mt-[30vh] w-[45vh] rounded-3xl bg-gradient-to-br">KorucuSAT</div>        
                            <p className="text-2xl drop-shadow-[0_35px_35px_rgba(0,0,0,1)] font-poppins font-semibold text-center mt-[6vh] w-3/4 lg:w-1/2 text-gray-200 ">
                                The Society’s flagship educational endeavor: A 3U CubeSAT developed to analyze the effect of the Sun on Earth’s ionosphere.
                            </p> 
                        </div>                    
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={.99}
                        speed={0.1}
                        factor={0.51}
                    >
                        <div className="w-screen h-full flex flex-col justify-center items-center">
                            <div className="flex w-2/3 lg:w-1/2  justify-between mt-[0vh] flex-col lg:flex-row gap-8">
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
                        </div>
                        
                    </ParallaxLayer>
                    <ParallaxLayer
                        offset={1.5}
                        speed={0.3}
                        factor={1.2}
                    >
                        <div className="w-screen h-full flex flex-col justify-center items-center ">
                            <div className="w-full lg:w-2/3 flex flex-col items-center justify-center">
                                <h1 className="text-3xl lg:text-5xl font-poppins font-bold text-center">
                                    OUR MOST <span className="bg-gradient-to-r from-orange-300 to-orange-700 bg-clip-text text-transparent">AMBITIOUS</span> PROJECT YET
                                </h1>
                                <p className="mt-[3vh] lg:mt-[10vh] text-xl font-poppins w-3/4 text-center">
                                    KorucuSat aims to correlate the intensity of solar radiation in Earth’s upper ionosphere with both geomagnetic activity and plasma density. Currently, the satellite team is engaged in writing an application for NASA’s Cubesat Launch Initiative (CSLI) grant, which offers comprehensive funding for all launch-associated costs.
                                </p>
                                <p className="mt-[3vh] lg:mt-[10vh] text-xl font-poppins w-3/4 text-center ">
                                    Beyond the science mission, the team has a strong educational mission. The team has initiated an outreach program for schools in the metro Atlanta area underrepresented in STEM fields.
                                </p>
                            </div>
                        </div>
                        
                    </ParallaxLayer>
                    
                </Parallax>
                        
            
            
            
        </>
    )
}

