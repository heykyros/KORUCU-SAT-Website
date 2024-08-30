'use client';
import { Canvas } from '@react-three/fiber'
import { Scene } from "./components/Scene";
import { Poppins } from 'next/font/google';

export default function Home() {
  return (
    <>
      <div className="relative w-screen h-screen" style={{ overflow: 'hidden' }}>
        <Canvas camera={{ fov: 100, near: 0.1, far: 1000, position: [8, 4, 5] }} style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}>
          <Scene />
        </Canvas>
        <div className="pageContents flex" style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1 }}>
          <h1 className='text-white text-[80px]'></h1>
        </div>
      </div>
    </>
  );
}
