import * as THREE from 'three'
import { Points, OrbitControls, useGLTF, Stats } from '@react-three/drei'
import { GLTF } from 'three-stdlib'
import { useFrame, Canvas, useLoader } from '@react-three/fiber'
import { useMemo, useRef } from 'react'
import { EffectComposer, SelectiveBloom } from '@react-three/postprocessing'

type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh
  }
  materials: {
    ['Scene_-_Root']: THREE.PointsMaterial
  }
}

export function Scene() {
  const ref = useRef<THREE.Group>(null!)
  const galaxyCenterLightRef = useRef<THREE.PointLight>(null!)
  const { nodes } = useGLTF('../models/galaxy.glb') as GLTFResult
  const [positions, colors] = useMemo(() => {
    nodes.Object_2.geometry.center()
    const positions = new Float32Array(
      nodes.Object_2.geometry.attributes.position.array.buffer
    )
    const colors = new Float32Array(positions.length)

    const getDistanceToCenter = (x: number, y: number, z: number) =>
      Math.sqrt(x * x + y * y + z * z)

    // make colors closer to 0,0,0 be more reddish and colors further away be more blueish
    const color = new THREE.Color()
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i]
      const y = positions[i + 1]
      const z = positions[i + 2]
      const distanceToCenter = getDistanceToCenter(x, y, z)
      const normalizedDistanceToCenter = distanceToCenter / 100

      color.setRGB(
        Math.cos(normalizedDistanceToCenter),
        THREE.MathUtils.randFloat(0, 0.8),
        Math.sin(normalizedDistanceToCenter)
      )
      color.toArray(colors, i)
    }

    return [positions, colors]
  }, [nodes])
  const starTexture = useLoader(THREE.TextureLoader, 'star.png')
  

  useFrame(({ clock }) => {
    ref.current.rotation.z = clock.getElapsedTime() / 18
    ref.current.scale.setScalar(8*Math.sin(clock.getElapsedTime() / 8) + 9.5)
  })

  return (
    

    <group position={[4,2,-4]} dispose={null} ref={ref}>
      <pointLight
        position={[0, 0, 0]}
        ref={galaxyCenterLightRef}
        intensity={0.5}
      />
      <Points scale={0.05} positions={positions} colors={colors} >
        <pointsMaterial
          map={starTexture}
          transparent
          depthWrite={false}
          vertexColors
          opacity={1.6}
          depthTest
          size={0.01}
        />
      </Points>
      <EffectComposer autoClear={false}>
        <SelectiveBloom
          intensity={2}
          luminanceThreshold={0.001}
          luminanceSmoothing={0.225}
          lights={[galaxyCenterLightRef]}
        />
      </EffectComposer>
    </group>
  )
}



useGLTF.preload('../models/galaxy.glb')
