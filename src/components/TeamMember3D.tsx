
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

function Model({ team, onClick }: { team: Team; onClick?: () => void }) {
  const group = useRef<THREE.Group>(null);
  
  useFrame((state) => {
    if (group.current) {
      // Gentle rotation animation
      group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.3;
    }
  });

  return (
    <group ref={group} onClick={onClick} dispose={null}>
      {/* This is where you would render your 3D model */}
      {/* For now, we'll use a simple cube as a placeholder */}
      <mesh position={[0, 0, 0]} scale={[1, 1.5, 0.5]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={teamColors[team]} />
      </mesh>
      
      {/* Head placeholder */}
      <mesh position={[0, 1, 0]}>
        <sphereGeometry args={[0.4, 32, 32]} />
        <meshStandardMaterial color="#f5d0a9" />
      </mesh>
      
      {/* Team shirt with logo */}
      <mesh position={[0, 0.2, 0.3]} scale={[0.8, 0.3, 0.1]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={teamColors[team]} />
        <Html position={[0, 0, 0.6]} transform distanceFactor={10}>
          <div className="text-white text-xs font-bold">
            {team === 'Knight Vipers' && '🛡️'}
            {team === 'Eagle Warriors' && '🦅'}
            {team === 'Royal Strikers' && '⚙️'}
            {team === 'Supreme Spartans' && '⚔️'}
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
      className={`relative w-full h-40 rounded-lg overflow-hidden ${className}`}
    >
      <Canvas shadows camera={{ position: [0, 1, 5], fov: 40 }}>
        <ambientLight intensity={0.5} />
        <spotLight position={[10, 10, 10]} angle={0.15} penumbra={1} />
        <pointLight position={[-10, -10, -10]} />
        <Model team={participant.team} onClick={handleSelect} />
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 3}
          maxPolarAngle={Math.PI / 2}
        />
      </Canvas>
      <div className="absolute bottom-0 left-0 right-0 bg-black/50 text-white p-1 text-center text-xs">
        {participant.name}
      </div>
    </motion.div>
  );
};

export default TeamMember3D;
