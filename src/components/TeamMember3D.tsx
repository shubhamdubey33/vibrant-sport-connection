
import { useRef, useState, useEffect } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { OrbitControls, Html, useTexture } from '@react-three/drei';
import { Participant, Team } from '@/types';
import { motion } from 'framer-motion';
import * as THREE from 'three';

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

// Enhanced facial expressions for different participants
const getFaceExpression = (id: string) => {
  // Use the participant's ID to derive a consistent expression
  const idSum = id.split('').reduce((acc, char) => acc + char.charCodeAt(0), 0);
  const expressionType = idSum % 5; // 5 different expression types
  
  switch (expressionType) {
    case 0: // Happy
      return {
        mouthType: 'smile',
        mouthCurve: 0.3,
        eyebrowsAngle: 0.1, // Slightly raised
        eyesWide: 1.1,      // Slightly wider eyes
        eyesPosition: 0.05,  // Eye position adjustment
        cheekBulge: 0.1,    // Cheek bulging for smile
        emotion: 'happy'
      };
    case 1: // Determined
      return {
        mouthType: 'straight',
        mouthCurve: 0,
        eyebrowsAngle: -0.2, // Angled down (focused)
        eyebrowThickness: 1.2, // Thicker eyebrows for determined look
        eyesWide: 0.9,       // Slightly narrowed
        eyesPosition: 0,      // Normal position
        cheekBulge: 0,       // No cheek bulge
        emotion: 'determined'
      };
    case 2: // Surprised
      return {
        mouthType: 'o',
        mouthSize: 1.2,      // Larger mouth for surprise
        eyebrowsAngle: 0.3,  // Raised high
        eyebrowsPosition: 0.1, // Raised position
        eyesWide: 1.3,       // Wide open
        eyesPosition: 0.1,    // Raised position
        cheekBulge: -0.05,   // Slight inward for surprise
        emotion: 'surprised'
      };
    case 3: // Serious
      return {
        mouthType: 'straight',
        mouthCurve: -0.05,   // Slight frown
        eyebrowsAngle: -0.1, // Slightly angled down
        eyebrowsPosition: -0.05, // Lowered position
        eyesWide: 1.0,       // Normal
        eyesPosition: -0.02,  // Slightly lowered
        cheekBulge: -0.05,   // Slight tension in cheeks
        emotion: 'serious'
      };
    case 4: // Amused
      return {
        mouthType: 'smirk',
        mouthCurve: 0.2,     // Uneven curve for smirk
        eyebrowsAngle: 0.2,  // One raised, one normal
        eyebrowsUnevenness: 0.15, // One higher than other
        eyesWide: 1.05,      // Slightly wide
        eyesSquint: 0.1,     // Slight squint
        cheekBulge: 0.07,    // One-sided cheek bulge
        emotion: 'amused'
      };
    default:
      return {
        mouthType: 'smile',
        mouthCurve: 0.1,
        eyebrowsAngle: 0,
        eyesWide: 1,
        eyesPosition: 0,
        cheekBulge: 0,
        emotion: 'neutral'
      };
  }
};

// Get hair style based on ID
const getHairStyle = (id: string) => {
  const styles = ['short', 'medium', 'long', 'curly', 'bald', 'mohawk'];
  const styleIndex = id.charCodeAt(0) % styles.length;
  return styles[styleIndex];
};

// Get hair color based on ID
const getHairColor = (id: string) => {
  const colors = ['#2d2926', '#4b3621', '#826644', '#3b2428', '#5a3825', '#706c61'];
  const colorIndex = id.charCodeAt(1) % colors.length;
  return colors[colorIndex];
};

function Model({ team, participantId, onClick }: { team: Team; participantId: string; onClick?: () => void }) {
  const group = useRef<THREE.Group>(null);
  const headRef = useRef<THREE.Mesh>(null);
  const expression = getFaceExpression(participantId);
  const hairStyle = getHairStyle(participantId);
  const hairColor = getHairColor(participantId);
  
  useFrame((state) => {
    if (group.current) {
      // More natural breathing animation
      group.current.position.y = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.03;
      
      // Subtle rotation based on emotion
      if (expression.emotion === 'happy' || expression.emotion === 'amused') {
        group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.15;
      } else if (expression.emotion === 'serious' || expression.emotion === 'determined') {
        group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.1) * 0.05;
      } else {
        group.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.1;
      }
      
      // Subtle head movement
      if (headRef.current) {
        headRef.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.5) * 0.03;
        headRef.current.rotation.z = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.02;
      }
    }
  });

  // Get unique jersey number based on ID
  const getJerseyNumber = () => {
    return (participantId.charCodeAt(0) + participantId.charCodeAt(participantId.length - 1)) % 99 + 1;
  };

  // Different skin tones based on ID - enhanced with more realistic tones
  const getSkinTone = () => {
    const tones = ['#f3d9b1', '#ffe0bd', '#d8b38b', '#bb9167', '#8d5524', '#613915'];
    const toneIndex = participantId.charCodeAt(0) % tones.length;
    return tones[toneIndex];
  };

  const skinTone = getSkinTone();

  return (
    <group ref={group} onClick={onClick} dispose={null}>
      {/* Enhanced Torso with better proportions */}
      <mesh position={[0, 0.2, 0]} scale={[1.1, 1.3, 0.6]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial 
          color={teamColors[team]} 
          roughness={0.6} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Better neck with natural curve */}
      <mesh position={[0, 1.05, 0]} scale={[0.25, 0.3, 0.25]}>
        <cylinderGeometry args={[1, 1.1, 1]} />
        <meshStandardMaterial 
          color={skinTone} 
          roughness={0.7} 
          metalness={0.1}
        />
      </mesh>
      
      {/* Improved Head with better shape */}
      <mesh ref={headRef} position={[0, 1.55, 0]}>
        <sphereGeometry args={[0.45, 32, 32]} />
        <meshStandardMaterial 
          color={skinTone} 
          roughness={0.7} 
          metalness={0.1}
          envMapIntensity={0.5}
        />
        
        {/* Enhanced Eyes with more detail */}
        <group position={[0, 0.05 + (expression.eyesPosition || 0), 0.35]}>
          {/* Right Eye */}
          <mesh position={[0.15, 0, 0.05]} scale={[0.09, 0.09 * (expression.eyesWide || 1), 0.09]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
            
            {/* Iris */}
            <mesh position={[0, 0, 0.6]} scale={[0.6, 0.6, 0.3]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial 
                color={["#3a3a3a", "#4B6455", "#8B5A2B", "#6082B6"][participantId.charCodeAt(2) % 4]} 
                roughness={0.4}
              />
              
              {/* Pupil */}
              <mesh position={[0, 0, 0.5]} scale={[0.5, 0.5, 0.5]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color="#000000" />
                
                {/* Eye shine */}
                <mesh position={[0.3, 0.3, 0.1]} scale={[0.2, 0.2, 0.1]}>
                  <sphereGeometry args={[1, 8, 8]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </mesh>
            </mesh>
            
            {/* Eyelid - based on expression */}
            {expression.eyesSquint && (
              <mesh position={[0, 0.3, 0.6]} rotation={[0.3, 0, 0]} scale={[0.8, 0.2, 0.5]}>
                <planeGeometry />
                <meshBasicMaterial color={skinTone} side={THREE.DoubleSide} />
              </mesh>
            )}
          </mesh>
          
          {/* Left Eye - mirrored from right */}
          <mesh position={[-0.15, 0, 0.05]} scale={[0.09, 0.09 * (expression.eyesWide || 1), 0.09]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color="#ffffff" roughness={0.3} />
            
            {/* Iris */}
            <mesh position={[0, 0, 0.6]} scale={[0.6, 0.6, 0.3]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial 
                color={["#3a3a3a", "#4B6455", "#8B5A2B", "#6082B6"][participantId.charCodeAt(2) % 4]} 
                roughness={0.4}
              />
              
              {/* Pupil */}
              <mesh position={[0, 0, 0.5]} scale={[0.5, 0.5, 0.5]}>
                <sphereGeometry args={[1, 16, 16]} />
                <meshBasicMaterial color="#000000" />
                
                {/* Eye shine */}
                <mesh position={[0.3, 0.3, 0.1]} scale={[0.2, 0.2, 0.1]}>
                  <sphereGeometry args={[1, 8, 8]} />
                  <meshBasicMaterial color="#ffffff" />
                </mesh>
              </mesh>
            </mesh>
            
            {/* Eyelid - based on expression */}
            {expression.eyesSquint && (
              <mesh position={[0, 0.3, 0.6]} rotation={[0.3, 0, 0]} scale={[0.8, 0.2, 0.5]}>
                <planeGeometry />
                <meshBasicMaterial color={skinTone} side={THREE.DoubleSide} />
              </mesh>
            )}
          </mesh>
        </group>
        
        {/* Enhanced Mouth with different expressions */}
        {expression.mouthType === 'smile' && (
          <mesh position={[0, -0.15, 0.4]} rotation={[0.2, 0, 0]} scale={[0.2, 0.07 * (1 + (expression.mouthCurve || 0)), 0.05]}>
            <torusGeometry args={[1, 0.3, 16, 16, Math.PI]} />
            <meshStandardMaterial color="#c53030" roughness={0.6} />
            
            {/* Teeth for smile */}
            <mesh position={[0, 0.7, 0]} rotation={[0.2, 0, 0]} scale={[0.9, 0.2, 0.5]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#ffffff" roughness={0.3} />
            </mesh>
          </mesh>
        )}
        
        {expression.mouthType === 'straight' && (
          <mesh position={[0, -0.15, 0.4]} rotation={[0, 0, 0]} scale={[0.2, 0.04, 0.05]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color="#c53030" roughness={0.6} />
            
            {/* Slight part between lips */}
            <mesh position={[0, -0.2, 0]} scale={[0.95, 0.2, 1.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshBasicMaterial color="#8b0000" />
            </mesh>
          </mesh>
        )}
        
        {expression.mouthType === 'o' && (
          <group position={[0, -0.15, 0.4]}>
            <mesh scale={[0.1, 0.1 * (expression.mouthSize || 1), 0.05]}>
              <torusGeometry args={[0.5, 0.5, 16, 16]} />
              <meshStandardMaterial color="#c53030" roughness={0.6} />
            </mesh>
            
            {/* Cavity inside mouth */}
            <mesh position={[0, 0, -0.02]} scale={[0.08, 0.08, 0.02]}>
              <cylinderGeometry args={[1, 1, 1, 16]} />
              <meshBasicMaterial color="#8b0000" />
            </mesh>
          </group>
        )}
        
        {expression.mouthType === 'smirk' && (
          <group position={[0, -0.15, 0.4]}>
            <mesh position={[0.1, 0, 0]} scale={[0.12, 0.05, 0.05]} rotation={[0, 0, 0.2 * (expression.mouthCurve || 1)]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#c53030" roughness={0.6} />
            </mesh>
            <mesh position={[-0.08, -0.01, 0]} scale={[0.1, 0.03, 0.05]} rotation={[0, 0, -0.1]}>
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color="#c53030" roughness={0.6} />
            </mesh>
            
            {/* Corner of mouth for smirk */}
            <mesh position={[0.17, 0, 0]} scale={[0.03, 0.03, 0.03]}>
              <sphereGeometry args={[1, 8, 8]} />
              <meshStandardMaterial color="#c53030" roughness={0.6} />
            </mesh>
          </group>
        )}
        
        {/* Cheeks - enhanced based on expression */}
        {(expression.cheekBulge || 0) > 0 && (
          <>
            <mesh position={[0.25, -0.05, 0.25]} scale={[0.15, 0.1, 0.1]}>
              <sphereGeometry args={[expression.cheekBulge * 2, 8, 8]} />
              <meshStandardMaterial color={`hsl(0, ${40 * expression.cheekBulge}%, ${Math.floor(70 + expression.cheekBulge * 100)}%)`} transparent opacity={0.6} />
            </mesh>
            <mesh position={[-0.25, -0.05, 0.25]} scale={[0.15, 0.1, 0.1]}>
              <sphereGeometry args={[expression.cheekBulge * 2, 8, 8]} />
              <meshStandardMaterial color={`hsl(0, ${40 * expression.cheekBulge}%, ${Math.floor(70 + expression.cheekBulge * 100)}%)`} transparent opacity={0.6} />
            </mesh>
          </>
        )}
        
        {/* Enhanced Eyebrows with more expression */}
        <mesh 
          position={[0.15, 0.18 + (expression.eyebrowsPosition || 0), 0.42]} 
          rotation={[0, 0, expression.eyebrowsAngle || 0]} 
          scale={[0.12, 0.03 * (expression.eyebrowThickness || 1), 0.02]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hairColor} roughness={0.9} />
        </mesh>
        
        <mesh 
          position={[-0.15, 0.18 + (expression.eyebrowsPosition || 0) + (expression.eyebrowsUnevenness || 0), 0.42]} 
          rotation={[0, 0, -1 * (expression.eyebrowsAngle || 0)]} 
          scale={[0.12, 0.03 * (expression.eyebrowThickness || 1), 0.02]}
        >
          <boxGeometry args={[1, 1, 1]} />
          <meshStandardMaterial color={hairColor} roughness={0.9} />
        </mesh>
        
        {/* Enhanced Hair styles based on ID */}
        {hairStyle === 'short' && (
          <mesh position={[0, 0.35, 0]} scale={[0.46, 0.15, 0.45]}>
            <sphereGeometry args={[1, 16, 16]} />
            <meshStandardMaterial color={hairColor} roughness={0.9} />
          </mesh>
        )}
        
        {hairStyle === 'medium' && (
          <>
            <mesh position={[0, 0.3, 0]} scale={[0.47, 0.2, 0.47]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color={hairColor} roughness={0.9} />
            </mesh>
            <mesh position={[0, 0.15, -0.25]} scale={[0.4, 0.25, 0.2]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color={hairColor} roughness={0.9} />
            </mesh>
          </>
        )}
        
        {hairStyle === 'long' && (
          <>
            <mesh position={[0, 0.3, 0]} scale={[0.47, 0.2, 0.47]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color={hairColor} roughness={0.9} />
            </mesh>
            <mesh position={[0, -0.1, -0.25]} scale={[0.4, 0.6, 0.2]}>
              <sphereGeometry args={[1, 16, 16]} />
              <meshStandardMaterial color={hairColor} roughness={0.9} />
            </mesh>
          </>
        )}
        
        {hairStyle === 'curly' && (
          <group position={[0, 0.3, 0]}>
            {[...Array(8)].map((_, index) => (
              <mesh 
                key={index}
                position={[
                  Math.sin(index * Math.PI / 4) * 0.25, 
                  0.1 + Math.cos(index * Math.PI / 4) * 0.1,
                  Math.cos(index * Math.PI / 4) * 0.25
                ]}
                scale={[0.15, 0.15, 0.15]}
              >
                <sphereGeometry args={[1, 8, 8]} />
                <meshStandardMaterial color={hairColor} roughness={0.9} />
              </mesh>
            ))}
          </group>
        )}
        
        {hairStyle === 'mohawk' && (
          <mesh position={[0, 0.5, 0]} scale={[0.08, 0.3, 0.4]}>
            <boxGeometry args={[1, 1, 1]} />
            <meshStandardMaterial color={hairColor} roughness={0.9} />
          </mesh>
        )}
        
        {/* No hair for bald style */}
      </mesh>
      
      {/* Improved Shoulders with better anatomy */}
      <mesh position={[0.6, 0.65, 0]} rotation={[0, 0, -0.3]} scale={[0.25, 0.25, 0.25]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={teamColors[team]} roughness={0.7} />
      </mesh>
      <mesh position={[-0.6, 0.65, 0]} rotation={[0, 0, 0.3]} scale={[0.25, 0.25, 0.25]}>
        <sphereGeometry args={[1, 16, 16]} />
        <meshStandardMaterial color={teamColors[team]} roughness={0.7} />
      </mesh>
      
      {/* More anatomical Arms with better joints */}
      <group position={[0.75, 0.5, 0]} rotation={[0, 0, -0.3]}>
        <mesh position={[0.1, -0.2, 0]} rotation={[0, 0, -0.2]} scale={[0.2, 0.45, 0.2]}>
          <cylinderGeometry args={[1, 0.8, 1, 12]} />
          <meshStandardMaterial color={skinTone} roughness={0.7} />
        </mesh>
        
        {/* Elbow joint */}
        <mesh position={[0.2, -0.45, 0]} scale={[0.2, 0.2, 0.2]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color={skinTone} roughness={0.7} />
        </mesh>
        
        {/* Forearm */}
        <mesh position={[0.3, -0.7, 0]} rotation={[0, 0, -0.4]} scale={[0.18, 0.3, 0.18]}>
          <cylinderGeometry args={[0.8, 1, 1, 12]} />
          <meshStandardMaterial color={skinTone} roughness={0.7} />
        </mesh>
      </group>
      
      <group position={[-0.75, 0.5, 0]} rotation={[0, 0, 0.3]}>
        <mesh position={[-0.1, -0.2, 0]} rotation={[0, 0, 0.2]} scale={[0.2, 0.45, 0.2]}>
          <cylinderGeometry args={[1, 0.8, 1, 12]} />
          <meshStandardMaterial color={skinTone} roughness={0.7} />
        </mesh>
        
        {/* Elbow joint */}
        <mesh position={[-0.2, -0.45, 0]} scale={[0.2, 0.2, 0.2]}>
          <sphereGeometry args={[1, 12, 12]} />
          <meshStandardMaterial color={skinTone} roughness={0.7} />
        </mesh>
        
        {/* Forearm */}
        <mesh position={[-0.3, -0.7, 0]} rotation={[0, 0, 0.4]} scale={[0.18, 0.3, 0.18]}>
          <cylinderGeometry args={[0.8, 1, 1, 12]} />
          <meshStandardMaterial color={skinTone} roughness={0.7} />
        </mesh>
      </group>
      
      {/* Improved Hands with more detail */}
      <mesh position={[1.2, -0.3, 0]} rotation={[0, 0, -0.3]} scale={[0.18, 0.06, 0.12]}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshStandardMaterial color={skinTone} roughness={0.7} />
        
        {/* Fingers */}
        <group position={[0.4, 0, 0]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh 
              key={i} 
              position={[0.2, 0, -0.3 + i * 0.2]} 
              rotation={[0, 0, 0]} 
              scale={[0.3, 0.8, 0.15]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={skinTone} roughness={0.7} />
            </mesh>
          ))}
        </group>
      </mesh>
      
      <mesh position={[-1.2, -0.3, 0]} rotation={[0, 0, 0.3]} scale={[0.18, 0.06, 0.12]}>
        <boxGeometry args={[1, 1, 1, 2, 2, 2]} />
        <meshStandardMaterial color={skinTone} roughness={0.7} />
        
        {/* Fingers */}
        <group position={[-0.4, 0, 0]}>
          {[0, 1, 2, 3].map((i) => (
            <mesh 
              key={i} 
              position={[-0.2, 0, -0.3 + i * 0.2]} 
              rotation={[0, 0, 0]} 
              scale={[0.3, 0.8, 0.15]}
            >
              <boxGeometry args={[1, 1, 1]} />
              <meshStandardMaterial color={skinTone} roughness={0.7} />
            </mesh>
          ))}
        </group>
      </mesh>
      
      {/* Team logo on chest */}
      <mesh position={[0, 0.3, 0.4]} scale={[0.8, 0.6, 0.05]}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color={teamColors[team]} roughness={0.9} />
        <Html position={[0, 0, 1.5]} transform distanceFactor={10} className="flex items-center justify-center">
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

      {/* Team number on back - using participant ID to generate unique number */}
      <mesh position={[0, 0.3, -0.4]} scale={[0.8, 0.6, 0.01]}>
        <planeGeometry args={[1, 1]} />
        <meshStandardMaterial color={teamColors[team]} roughness={0.9} />
        <Html position={[0, 0, 0.1]} transform distanceFactor={10}>
          <div className="text-white text-xl font-bold" style={{ textShadow: '1px 1px 1px black' }}>
            {getJerseyNumber()}
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
    const timer = setTimeout(() => setIsLoaded(true), 300);
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
        camera={{ position: [0, 1, 5], fov: 40 }}
        gl={{ preserveDrawingBuffer: true }}
      >
        <ambientLight intensity={0.8} />
        <spotLight position={[5, 10, 10]} angle={0.2} penumbra={1} intensity={1.5} castShadow />
        <spotLight position={[-5, 10, 10]} angle={0.2} penumbra={1} intensity={0.5} castShadow />
        <pointLight position={[0, 0, 5]} intensity={0.6} />
        
        {/* Position the model properly to ensure it's fully visible */}
        <group position={[0, -1.2, 0]}>
          <Model team={participant.team} participantId={participant.id} onClick={handleSelect} />
        </group>
        
        <OrbitControls 
          enableZoom={false} 
          enablePan={false}
          minPolarAngle={Math.PI / 4}
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
