import * as THREE from 'three';
import { Points, useGLTF } from '@react-three/drei';
import { GLTF } from 'three-stdlib';
import { useFrame, useThree, useLoader } from '@react-three/fiber';
import { useMemo, useRef, useState, useEffect } from 'react';
import { EffectComposer, Bloom } from '@react-three/postprocessing';

// Hook to manage scroll-based camera effect
function useScrollEffect(ref: React.RefObject<THREE.Group>, setRotationActive: (active: boolean) => void, setScale: (scale: number) => void) {
  const { camera } = useThree();
  const [scrollY, setScrollY] = useState(window.scrollY);

  // Define camera positions, panning positions, scroll thresholds, and scale factors
  const cameraPositions = [
    [8, 4, 5],  // Position 1
    [3, 4, 5],  // Position 2
    [3, 4, 5],  // Position 3
  ];

  const cameraPans = [
    [0, 0, 0], // Pan for Position 1
    [5, -115, -5],  // Pan for Position 2
    [5, -115, -5],   // Pan for Position 3
  ];

  const scrollThresholds = [
    0,       // Position 1 at top
    1200,     // Position 2
    2000,    // Position 3
  ];

  const scaleFactors = [
    8,      // Scale for Position 1
    2,    // Scale for Position 2
    16,      // Scale for Position 3
  ];

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    // Determine whether to activate rotation based on scroll position
    const rotationActive = true
    setRotationActive(rotationActive);

    // Determine the index of the target scale based on scroll position
    let targetIndex = scrollThresholds.findIndex(threshold => scrollY < threshold);
    if (targetIndex === -1) targetIndex = scrollThresholds.length - 1; // Use last scale if beyond thresholds

    // Calculate interpolation value for scale
    const prevThreshold = scrollThresholds[targetIndex - 1] || 0;
    const nextThreshold = scrollThresholds[targetIndex];
    const t = (scrollY - prevThreshold) / (nextThreshold - prevThreshold);
    const clampedT = Math.max(0, Math.min(t, 1));

    // Interpolate scale
    const interpolatedScale = scaleFactors[targetIndex - 1] + clampedT * (scaleFactors[targetIndex] - scaleFactors[targetIndex - 1]);

    setScale(interpolatedScale);
  }, [scrollY, setRotationActive, setScale]);

  useFrame(() => {
    if (!camera) return;

    let targetPosition = cameraPositions[0];
    let prevPosition = cameraPositions[0];
    let targetPan = cameraPans[0];
    let prevPan = cameraPans[0];

    // Determine the index of the target position and panning
    let targetIndex = scrollThresholds.findIndex(threshold => scrollY < threshold);
    if (targetIndex === -1) targetIndex = cameraPositions.length - 1; // Use last position if beyond thresholds

    if (targetIndex > 0) {
      prevPosition = cameraPositions[targetIndex - 1];
      prevPan = cameraPans[targetIndex - 1];
    }

    targetPosition = cameraPositions[targetIndex];
    targetPan = cameraPans[targetIndex];

    // Calculate interpolation value for position
    const prevThreshold = scrollThresholds[targetIndex - 1] || 0;
    const nextThreshold = scrollThresholds[targetIndex];
    const t = (scrollY - prevThreshold) / (nextThreshold - prevThreshold);
    const clampedT = Math.max(0, Math.min(t, 1));

    // Interpolate camera position
    const interpolatedPosition = [
      prevPosition[0] + clampedT * (targetPosition[0] - prevPosition[0]),
      prevPosition[1] + clampedT * (targetPosition[1] - prevPosition[1]),
      prevPosition[2] + clampedT * (targetPosition[2] - prevPosition[2])
    ];

    // Interpolate panning position
    const interpolatedPan = [
      prevPan[0] + clampedT * (targetPan[0] - prevPan[0]),
      prevPan[1] + clampedT * (targetPan[1] - prevPan[1]),
      prevPan[2] + clampedT * (targetPan[2] - prevPan[2])
    ];

    camera.position.set(interpolatedPosition[0], interpolatedPosition[1], interpolatedPosition[2]);

    // Set camera lookAt to focus on the center while considering panning
    const lookAtPosition = new THREE.Vector3(0, 0, 0);
    camera.lookAt(lookAtPosition.add(new THREE.Vector3(...interpolatedPan)));
  });
}

// Type definition for GLTF result
type GLTFResult = GLTF & {
  nodes: {
    Object_2: THREE.Mesh;
  };
  materials: {
    ['Scene_-_Root']: THREE.PointsMaterial;
  };
};

// Main Scene component
export function Scene() {
  const ref = useRef<THREE.Group>(null!);
  const galaxyCenterLightRef = useRef<THREE.PointLight>(null!);
  const [rotationActive, setRotationActive] = useState(true); // State to control rotation
  const [scale, setScale] = useState(1); // State to control scale
  const { nodes } = useGLTF('../models/galaxy.glb') as GLTFResult;
  const [positions, colors] = useMemo(() => {
    if (!nodes.Object_2) return [new Float32Array(), new Float32Array()];

    nodes.Object_2.geometry.center();
    const positions = new Float32Array(nodes.Object_2.geometry.attributes.position.array.buffer);
    const colors = new Float32Array(positions.length);

    const getDistanceToCenter = (x: number, y: number, z: number) =>
      Math.sqrt(x * x + y * y + z * z);

    const color = new THREE.Color();
    for (let i = 0; i < positions.length; i += 3) {
      const x = positions[i];
      const y = positions[i + 1];
      const z = positions[i + 2];
      const distanceToCenter = getDistanceToCenter(x, y, z);
      const normalizedDistanceToCenter = distanceToCenter / 100;

      color.setRGB(
        Math.cos(normalizedDistanceToCenter),
        THREE.MathUtils.randFloat(0, 0.8),
        Math.sin(normalizedDistanceToCenter)
      );
      color.toArray(colors, i);
    }

    return [positions, colors];
  }, [nodes]);

  const starTexture = useLoader(THREE.TextureLoader, 'star.png');

  useFrame(({ clock }) => {
    if (ref.current) {
      if (rotationActive) { // Apply rotation only if active
        ref.current.rotation.z = clock.getElapsedTime() / 18;
      }
      ref.current.scale.setScalar(scale); // Apply scale
    }
  });

  useScrollEffect(ref, setRotationActive, setScale); // Pass ref, rotation state handler, and scale state handler to useScrollEffect

  return (
    <>
    <group position={[4, 2, -4]} dispose={null} ref={ref}>
      <pointLight
        position={[0, 0, 0]}
        ref={galaxyCenterLightRef}
        intensity={0.5}
      />
      <Points scale={0.05} positions={positions} colors={colors}>
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
        <Bloom
          intensity={2}
          luminanceThreshold={0.001}
          luminanceSmoothing={0.225}
          height={900}
          width={900}
        />
      </EffectComposer>
    </group>
     
     </>
  );
}

useGLTF.preload('../models/galaxy.glb');