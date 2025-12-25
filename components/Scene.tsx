import React, { useRef, useMemo, Suspense } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { Float, MeshDistortMaterial, Stars, Preload, Environment } from '@react-three/drei';
import * as THREE from 'three';
import { useScroll, useTransform } from 'framer-motion';

const NeuralCore = () => {
  const meshRef = useRef<THREE.Mesh>(null);
  const ring1Ref = useRef<THREE.Mesh>(null);
  const ring2Ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    const time = state.clock.getElapsedTime();
    if (meshRef.current) {
      meshRef.current.rotation.x = Math.cos(time / 4) * 0.2;
      meshRef.current.rotation.y = Math.sin(time / 2) * 0.2;
      const s = 1 + Math.sin(time * 2) * 0.05;
      meshRef.current.scale.set(s, s, s);
    }
    if (ring1Ref.current) ring1Ref.current.rotation.y += 0.005;
    if (ring2Ref.current) ring2Ref.current.rotation.x += 0.003;
  });

  return (
    <group>
      <Float speed={2.5} rotationIntensity={0.8} floatIntensity={0.8}>
        <mesh ref={meshRef}>
          <sphereGeometry args={[1, 64, 64]} />
          <MeshDistortMaterial
            color="#db5627"
            speed={4}
            distort={0.45}
            radius={1}
            emissive="#8a3618"
            emissiveIntensity={2}
            roughness={0.05}
            metalness={0.9}
          />
        </mesh>
      </Float>

      <mesh ref={ring1Ref} scale={[1.2, 1.2, 1.2]} rotation={[Math.PI / 4, 0, 0]}>
        <torusGeometry args={[1.6, 0.015, 16, 100]} />
        <meshStandardMaterial color="#a855f7" emissive="#a855f7" emissiveIntensity={3} transparent opacity={0.4} />
      </mesh>

      <mesh ref={ring2Ref} scale={[1.2, 1.2, 1.2]} rotation={[0, Math.PI / 4, 0]}>
        <torusGeometry args={[1.9, 0.01, 16, 100]} />
        <meshStandardMaterial color="#06b6d4" emissive="#06b6d4" emissiveIntensity={3} transparent opacity={0.3} />
      </mesh>
    </group>
  );
};

const Galaxy = ({ count = 4000 }) => {
  const points = useMemo(() => {
    const p = new Float32Array(count * 3);
    for (let i = 0; i < count; i++) {
      const radius = 10 + Math.random() * 20;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos((Math.random() * 2) - 1);

      p[i * 3] = radius * Math.sin(phi) * Math.cos(theta);
      p[i * 3 + 1] = radius * Math.sin(phi) * Math.sin(theta);
      p[i * 3 + 2] = radius * Math.cos(phi);
    }
    return p;
  }, [count]);

  const pointsRef = useRef<THREE.Points>(null);

  useFrame(() => {
    if (pointsRef.current) {
      pointsRef.current.rotation.y += 0.0005;
      pointsRef.current.rotation.z += 0.0002;
    }
  });

  return (
    <points ref={pointsRef}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          count={count}
          array={points}
          itemSize={3}
        />
      </bufferGeometry>
      <pointsMaterial
        size={0.05}
        color="#ffffff"
        transparent
        opacity={0.4}
        sizeAttenuation
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
};

const CameraController = () => {
  const { scrollYProgress } = useScroll();
  const zVal = useTransform(scrollYProgress, [0, 1], [5, 15]);
  const yVal = useTransform(scrollYProgress, [0, 0.5, 1], [0, 3, 0]);

  useFrame((state) => {
    state.camera.position.z = zVal.get();
    state.camera.position.y = yVal.get();
    state.camera.lookAt(0, 0, 0);
  });

  return null;
};

const Scene: React.FC = () => {
  return (
    <div className="fixed inset-0 z-0 bg-[#050505]">
      <Canvas
        dpr={[1, 2]}
        gl={{
          antialias: true,
          alpha: true,
          powerPreference: "high-performance"
        }}
      >
        <Suspense fallback={null}>
          <CameraController />
          <ambientLight intensity={0.4} />
          <pointLight position={[10, 10, 10]} intensity={2} color="#db5627" />
          <pointLight position={[-10, -10, -10]} intensity={1.5} color="#a855f7" />
          <fog attach="fog" args={['#050505', 5, 25]} />

          <Stars
            radius={50}
            depth={50}
            count={3000}
            factor={4}
            saturation={0}
            fade
            speed={1.5}
          />

          <Galaxy count={5000} />
          <NeuralCore />

          <Environment preset="night" />
          <Preload all />
        </Suspense>
      </Canvas>
    </div>
  );
};

export default Scene;