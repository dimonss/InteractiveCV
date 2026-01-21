import { useRef, useMemo } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Stars } from '@react-three/drei';
import * as THREE from 'three';

function FloatingShape({ position, color, speed = 1 }: { position: [number, number, number]; color: string; speed?: number }) {
    const meshRef = useRef<THREE.Mesh>(null);

    useFrame((state) => {
        if (meshRef.current) {
            meshRef.current.rotation.x = Math.sin(state.clock.elapsedTime * speed * 0.3) * 0.2;
            meshRef.current.rotation.y = state.clock.elapsedTime * speed * 0.2;
        }
    });

    return (
        <Float speed={speed} rotationIntensity={0.5} floatIntensity={1}>
            <mesh ref={meshRef} position={position}>
                <icosahedronGeometry args={[0.5, 0]} />
                <meshStandardMaterial color={color} wireframe transparent opacity={0.6} />
            </mesh>
        </Float>
    );
}

function Particles({ count = 200 }: { count?: number }) {
    const points = useMemo(() => {
        const positions = new Float32Array(count * 3);
        for (let i = 0; i < count; i++) {
            positions[i * 3] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 1] = (Math.random() - 0.5) * 20;
            positions[i * 3 + 2] = (Math.random() - 0.5) * 20;
        }
        return positions;
    }, [count]);

    const pointsRef = useRef<THREE.Points>(null);

    useFrame((state) => {
        if (pointsRef.current) {
            pointsRef.current.rotation.y = state.clock.elapsedTime * 0.02;
            pointsRef.current.rotation.x = Math.sin(state.clock.elapsedTime * 0.01) * 0.1;
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
            <pointsMaterial size={0.02} color="#6366f1" transparent opacity={0.8} sizeAttenuation />
        </points>
    );
}

export default function Background3D() {
    return (
        <div style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            zIndex: -1,
            pointerEvents: 'none'
        }}>
            <Canvas camera={{ position: [0, 0, 5], fov: 75 }}>
                <ambientLight intensity={0.5} />
                <pointLight position={[10, 10, 10]} intensity={0.8} />

                <Stars radius={100} depth={50} count={1000} factor={4} fade speed={1} />

                <Particles count={150} />

                <FloatingShape position={[-3, 2, -2]} color="#6366f1" speed={0.8} />
                <FloatingShape position={[3, -1, -3]} color="#8b5cf6" speed={1.2} />
                <FloatingShape position={[0, 3, -4]} color="#a855f7" speed={0.6} />
                <FloatingShape position={[-2, -2, -2]} color="#6366f1" speed={1} />
                <FloatingShape position={[2, 1, -3]} color="#8b5cf6" speed={0.9} />
            </Canvas>
        </div>
    );
}
