import { Canvas } from '@react-three/fiber';
import { Environment } from '@react-three/drei';
import FloatingRings from './FloatingRings';
import Particles from './Particles';
import RosePetals from './RosePetals';

export default function Scene() {
  return (
    <Canvas
      className="fixed inset-0 h-full w-full"
      style={{ position: 'fixed', inset: 0, width: '100%', height: '100%', zIndex: -1, pointerEvents: 'none', background: '#064E31' }}
      dpr={[1, 1.5]}
      camera={{ position: [0, 0, 7], fov: 45 }}
      gl={{ antialias: true, powerPreference: 'high-performance' }}
    >
      <color attach="background" args={['#064E31']} />
      <fog attach="fog" args={[ '#064E31', 4, 18 ]} />
      <ambientLight intensity={1.5} />
      <directionalLight position={[4, 5, 4]} intensity={2.7} color="#fff7e5" />
      <pointLight position={[-4, -2, 3]} intensity={2.1} color="#8EE4C7" />
      <FloatingRings />
      <RosePetals />
      <Particles />
      <Environment preset="studio" />
    </Canvas>
  );
}
