'use client';

import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Points, PointMaterial } from '@react-three/drei';
import * as THREE from 'three';

function StarField() {
  const ref = useRef<THREE.Points>(null!);
  const count = 3000;

  const positions = useMemo(() => {
    const pos = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 12;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);
    }
    return pos;
  }, []);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.y += delta * 0.02;
      ref.current.rotation.x += delta * 0.01;
    }
  });

  return (
    <Points ref={ref} positions={positions} stride={3} frustumCulled={false}>
      <PointMaterial transparent color="#7c3aed" size={0.03} sizeAttenuation depthWrite={false} opacity={0.8} />
    </Points>
  );
}

function CompassRing({ radius, color, speed, tilt }: { radius: number; color: string; speed: number; tilt: number }) {
  const ref = useRef<THREE.Mesh>(null!);

  useFrame((_, delta) => {
    if (ref.current) {
      ref.current.rotation.z += delta * speed;
    }
  });

  return (
    <mesh ref={ref} rotation={[tilt, 0, 0]}>
      <torusGeometry args={[radius, 0.015, 16, 100]} />
      <meshBasicMaterial color={color} transparent opacity={0.6} />
    </mesh>
  );
}

function CompassNeedle() {
  const ref = useRef<THREE.Group>(null!);

  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.y = Math.sin(state.clock.elapsedTime * 0.5) * 0.3;
      ref.current.rotation.z = Math.sin(state.clock.elapsedTime * 0.3) * 0.1;
    }
  });

  return (
    <group ref={ref}>
      {/* North needle */}
      <mesh position={[0, 0.6, 0]}>
        <coneGeometry args={[0.08, 1.2, 4]} />
        <meshBasicMaterial color="#7c3aed" transparent opacity={0.9} />
      </mesh>
      {/* South needle */}
      <mesh position={[0, -0.6, 0]} rotation={[0, 0, Math.PI]}>
        <coneGeometry args={[0.08, 1.2, 4]} />
        <meshBasicMaterial color="#3b82f6" transparent opacity={0.9} />
      </mesh>
      {/* Center */}
      <mesh>
        <sphereGeometry args={[0.08, 16, 16]} />
        <meshBasicMaterial color="#f59e0b" />
      </mesh>
    </group>
  );
}

function Scene() {
  return (
    <>
      <ambientLight intensity={0.5} />
      <StarField />
      <CompassRing radius={1.8} color="#7c3aed" speed={0.3} tilt={0.3} />
      <CompassRing radius={2.0} color="#3b82f6" speed={-0.2} tilt={-0.5} />
      <CompassRing radius={2.2} color="#f59e0b" speed={0.15} tilt={0.8} />
      <CompassNeedle />
    </>
  );
}

export default function HeroScene() {
  return (
    <div className="absolute inset-0 z-0">
      <Canvas camera={{ position: [0, 0, 5], fov: 60 }} dpr={[1, 2]}>
        <Scene />
      </Canvas>
    </div>
  );
}
