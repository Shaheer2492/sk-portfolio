"use client";
import { Canvas, useFrame } from "@react-three/fiber";
import { useMemo, useRef } from "react";
import * as THREE from "three";

function ParticleField() {
  const num = 1500;
  const positions = useMemo(() => {
    const arr = new Float32Array(num * 3);
    for (let i = 0; i < num; i++) {
      const r = 2.2 * Math.cbrt(Math.random());
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      arr[i * 3 + 0] = r * Math.sin(phi) * Math.cos(theta);
      arr[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      arr[i * 3 + 2] = r * Math.cos(phi);
    }
    return arr;
  }, []);

  const pointsRef = useRef<THREE.Points>(null!);
  useFrame(({ clock, mouse }) => {
    if (!pointsRef.current) return;
    pointsRef.current.rotation.y = clock.getElapsedTime() * 0.02 - mouse.x * 0.1;
    pointsRef.current.rotation.x = -mouse.y * 0.05;
  });

  const material = useMemo(() => new THREE.PointsMaterial({
    size: 0.008,
    sizeAttenuation: true,
    color: new THREE.Color(0.5, 0.5, 0.5),
    transparent: true,
    opacity: 0.4,
    blending: THREE.AdditiveBlending
  }), []);

  return (
    <points ref={pointsRef} frustumCulled>
      <bufferGeometry>
        <bufferAttribute attach="attributes-position" args={[positions, 3]} />
      </bufferGeometry>
      <primitive object={material} attach="material" />
    </points>
  );
}

export default function Scene() {
  return (
    <Canvas camera={{ position: [0, 0, 3.2], fov: 45 }} gl={{ antialias: true, alpha: true }}>
      <ParticleField />
    </Canvas>
  );
}


