
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html } from '@react-three/drei';
import { Participant, Team } from '@/types';
import { motion } from 'framer-motion';

const teamColors = {
  'Knight Vipers': '#f59e0b', // amber-500
  'Eagle Warriors': '#475569', // slate-600
  'Royal Strikers': '#1e3a8a', // blue-900
  'Supreme Spartans': '#dc2626', // red-600
};

const teamLogos = {
  'Knight Vipers': '/lovable-uploads/1ee94a74-cd17-45dc-b852-f8bce8e8d327.png',
  'Eagle Warriors': '/lovable-uploads/f8c131d7-162c-4560-9031-9e66d52a4e18.png',
  'Royal Strikers': '⚙️',
  'Supreme Spartans': '/lovable-uploads/329f7383-267a-4763-a7f9-26bf5ff45898.png',
};

function Model({ team, onClick }: { team: Team; onClick?: () => void }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Subtle breathing animation
      group.current.position.y = Math.sin(state.clock.getElapsedTime()) * 0.05;
      // Gentle rotation animation
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
    }
  });

  return (
    <group ref={group} onClick={onClick} dispose={null}>
      {/* Torso - more realistic proportions */}
      <mesh position={[0, 0.2, 0]} scale={[1.2, 1.3, 0.7]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={teamColors[team]} />
      </mesh>
      
      {/* Neck */}
      <mesh position={[0, 1.05, 0]} scale={[0.3, 0.3, 0.3]}>
        <cylinderGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#f3d9b1" />
      </mesh>
      
      {/* Head - more realistic with better shading */}
      <mesh position={[0, 1.5, 0]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial color="#f3d9b1" roughness={0.7} metalness={0.1} />
        
        {/* Eyes - more detailed */}
        <mesh position={[0.2, 0.05, 0.4]} scale={[0.1, 0.1, 0.1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
          <mesh position={[0, 0, 0.5]} scale={[0.6, 0.6, 0.6]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="#3a3a3a" />
            <mesh position={[0, 0, 0.2]} scale={[0.3, 0.3, 0.3]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#000000" />
            </mesh>
          </mesh>
        </mesh>
        
        <mesh position={[-0.2, 0.05, 0.4]} scale={[0.1, 0.1, 0.1]}>
          <sphereGeometry args={[1, 16, 16]} />
          <meshStandardMaterial color="#ffffff" />
          <mesh position={[0, 0, 0.5]} scale={[0.6, 0.6, 0.6]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshBasicMaterial color="#3a3a3a" />
            <mesh position={[0, 0, 0.2]} scale={[0.3, 0.3, 0.3]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshBasicMaterial color="#000000" />
            </mesh>
          </mesh>
        </mesh>
        
        {/* Mouth */}
        <mesh position={[0, -0.2, 0.4]} scale={[0.2, 0.05, 0.05]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color="#c53030" />
        </mesh>
        
        {/* Eyebrows */}
        <mesh position={[0.2, 0.2, 0.42]} rotation={[0, 0, 0.2]} scale={[0.15, 0.03, 0.02]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#5a3825" />
        </mesh>
        <mesh position={[-0.2, 0.2, 0.42]} rotation={[0, 0, -0.2]} scale={[0.15, 0.03, 0.02]}>
          <boxGeometry args={[1, 1, 1]} />
          <meshBasicMaterial color="#5a3825" />
        </mesh>
      </mesh>
      
      {/* Shoulders - wider and more defined */}
      <mesh position={[0.7, 0.4, 0]} rotation={[0, 0, -0.3]} scale={[0.3, 0.3, 0.3]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={teamColors[team]} />
      </mesh>
      <mesh position={[-0.7, 0.4, 0]} rotation={[0, 0, 0.3]} scale={[0.3, 0.3, 0.3]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={teamColors[team]} />
      </mesh>
      
      {/* Arms - more defined with proper bend */}
      <mesh position={[0.9, 0.1, 0]} rotation={[0, 0, -0.5]} scale={[0.25, 0.6, 0.25]}>
        <cylinderGeometry args={[1, 0.8, 1, 16]} />
        <meshStandardMaterial color="#f3d9b1" />
      </mesh>
      <mesh position={[-0.9, 0.1, 0]} rotation={[0, 0, 0.5]} scale={[0.25, 0.6, 0.25]}>
        <cylinderGeometry args={[1, 0.8, 1, 16]} />
        <meshStandardMaterial color="#f3d9b1" />
      </mesh>
      
      {/* Hands */}
      <mesh position={[1.1, -0.3, 0]} rotation={[0, 0, -0.3]} scale={[0.2, 0.2, 0.2]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#f3d9b1" />
      </mesh>
      <mesh position={[-1.1, -0.3, 0]} rotation={[0, 0, 0.3]} scale={[0.2, 0.2, 0.2]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color="#f3d9b1" />
      </mesh>
      
      {/* Company logo on chest */}
      <mesh position={[0, 0.3, 0.4]} scale={[0.9, 0.7, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={teamColors[team]} roughness={0.9} />
        <Html position={[0, 0, 0.6]} transform distanceFactor={10} className="flex items-center justify-center">
          {team === 'Royal Strikers' ? (
            <div className="text-white text-xl font-bold">⚙️</div>
          ) : (
            <img 
              src={teamLogos[team]} 
              alt={`${team} logo`} 
              className="w-10 h-10 object-contain"
            />
          )}
        </Html>
      </mesh>

      {/* Team number on back */}
      <mesh position={[0, 0.3, -0.4]} scale={[0.9, 0.7, 0.01]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={teamColors[team]} roughness={0.9} />
        <Html position={[0, 0, 0.1]} transform distanceFactor={10}>
          <div className="text-white text-xl font-bold" style={{ textShadow: '1px 1px 1px black' }}>
            {Math.floor(Math.random() * 99) + 1}
          </div>
        </Html>
      </mesh>
    </group>
  );
}

interface TeamMember3DProps {
  participant: Participant;
  onSelect?: (participant: Participant) => void;
  className?: string;
}

const TeamMember3D = ({ participant, onSelect, className }: TeamMember3DProps) => {
  const [isLoaded, setIsLoaded] = useState(false);
  
  useEffect(() => {
    // Simulate loading delay
    const timer = setTimeout(() => setIsLoaded(true), 500);
    return () => clearTimeout(timer);
  }, []);
  
  const handleSelect = () => {
    if (onSelect) {
      onSelect(participant);
    }
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: isLoaded ? 1 : 0 }}
      className={`relative w-full h-40 rounded-lg overflow-hidden shadow-lg ${className}`}
    >
      <Canvas 
        shadows 
        camera={{ position: [0, 0, 5], fov: 40 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
        <spotLight position={[-5, 10, 10]} angle={0.2} penumbra={1} intensity={0.5} castShadow />
        <pointLight position={[0, 0, 5]} intensity={0.6} />
        <Model team={participant.team} onClick={handleSelect} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
          autoRotate={false}
          autoRotateSpeed={1}
        />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 bg-black/70 text-white p-2 text-center text-xs">
        {participant.name}
      </div>
    </motion.div>
  );
};

export default TeamMember3D;
