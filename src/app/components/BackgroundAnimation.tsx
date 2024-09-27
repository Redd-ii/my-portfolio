// src/components/BackgroundAnimation.tsx

"use client";

import React, { useContext } from 'react';
import { Canvas, useFrame, useThree } from '@react-three/fiber';
import { useScroll, useTransform, useTime, MotionValue } from 'framer-motion';
import { degreesToRadians } from 'popmotion';
import { ThemeContext } from '@/context/ThemeContext';
import * as THREE from 'three';
import { Line } from '@react-three/drei';

interface BackgroundAnimationProps {
  isScrollable: boolean;
}

export default function BackgroundAnimation({ isScrollable }: BackgroundAnimationProps) {
  const { theme } = useContext(ThemeContext);
  const { scrollYProgress } = useScroll();

  const yAngle = useTransform(
    scrollYProgress,
    [0, 1],
    [0.001, degreesToRadians(isScrollable ? 180 : 90)]
  );
  const distance = useTransform(scrollYProgress, [0, 1], [isScrollable ? 10 : 10, 4]);
  const time = useTime();

  const color = theme === 'dark' ? '#FBBF24' : '#2563EB';

  return (
    <div
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -1,
        pointerEvents: 'none',
        imageRendering: 'pixelated',
      }}
    >
      <Canvas
        style={{ width: '100%', height: '100%', imageRendering: 'pixelated' }}
        gl={{ antialias: false }}
        camera={{ position: [0, 0, 10], fov: 75 }}
        dpr={0.4}
      >
        <Scene color={color} yAngle={yAngle} distance={distance} time={time} />
      </Canvas>
    </div>
  );
}

function Scene({
  color,
  yAngle,
  distance,
  time,
}: {
  color: string;
  yAngle: MotionValue<number>;
  distance: MotionValue<number>;
  time: MotionValue<number>;
}) {
  const { camera } = useThree();

  useFrame(() => {
    camera.position.setFromSphericalCoords(
      distance.get(),
      yAngle.get(),
      time.get() * 0.0005
    );
    camera.lookAt(0, 0, 0);
  });

  return (
    <Icosahedron
      color={color}
      lineWidth={3}        
      glowLineWidth={3}   
    />
  );
}

function Icosahedron({
  color,
  lineWidth = 1,         
  glowLineWidth = 2,    
}: {
  color: string;
  lineWidth?: number;
  glowLineWidth?: number;
}) {
  const geometry = React.useMemo(() => new THREE.IcosahedronGeometry(1, 0), []);

  const positions = React.useMemo(() => {
    const positionArray = geometry.attributes.position.array;
    const positions: [number, number, number][] = [];
    for (let i = 0; i < positionArray.length; i += 3) {
      positions.push([
        positionArray[i],
        positionArray[i + 1],
        positionArray[i + 2],
      ]);
    }
    positions.push(positions[0]);
    return positions;
  }, [geometry]);

  return (
    <group rotation={[0.35, 0, 0]}>
      {/* Glow Lines */}
      <Line
        points={positions}
        color={color}
        lineWidth={glowLineWidth}
        transparent
        opacity={0.4}
        blending={THREE.AdditiveBlending}
        depthWrite={false}
        polygonOffset
        polygonOffsetFactor={-1}
        scale={[1.02, 1.02, 1.02]}
      />
      {/* Original Lines */}
      <Line
        points={positions}
        color={color}
        lineWidth={lineWidth}
      />
    </group>
  );
}
