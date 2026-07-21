"use client";

import { Canvas, useFrame } from "@react-three/fiber";
import { Float, Environment, OrbitControls } from "@react-three/drei";
import { useRef } from "react";
import type { Mesh } from "three";

function Orb() {
  const meshRef = useRef<Mesh>(null);

  useFrame((state) => {
    if (!meshRef.current) return;
    meshRef.current.rotation.x = state.clock.elapsedTime * 0.25;
    meshRef.current.rotation.y = state.clock.elapsedTime * 0.35;
  });

  return (
    <Float speed={1.6} rotationIntensity={0.8} floatIntensity={1.4}>
      <mesh ref={meshRef}>
        <icosahedronGeometry args={[1.25, 1]} />
        <meshStandardMaterial
          color="#38bdf8"
          emissive="#0ea5e9"
          emissiveIntensity={0.85}
          roughness={0.15}
          metalness={0.3}
        />
      </mesh>
    </Float>
  );
}

export function HeroScene() {
  return (
    <div className="h-[260px] w-full overflow-hidden rounded-[28px] border border-white/10 bg-slate-900/80 md:h-[360px]">
      <Canvas camera={{ position: [0, 0, 4], fov: 45 }}>
        <color attach="background" args={["#0f172a"]} />
        <ambientLight intensity={1.1} />
        <pointLight position={[3, 3, 3]} intensity={20} color="#60a5fa" />
        <pointLight position={[-2, -2, 1]} intensity={14} color="#f472b6" />
        <Environment preset="city" />
        <Orb />
        <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.8} />
      </Canvas>
    </div>
  );
}
