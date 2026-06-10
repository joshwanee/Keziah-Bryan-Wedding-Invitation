import { Float } from '@react-three/drei';

function Ring({ position, rotation, scale = 1 }) {
  return (
    <Float speed={2.6} rotationIntensity={1.1} floatIntensity={2.4}>
      <mesh position={position} rotation={rotation} scale={scale}>
        <torusGeometry args={[0.62, 0.09, 24, 96]} />
        <meshStandardMaterial color="#FADF9F" metalness={0.95} roughness={0.14} emissive="#7BE9B8" emissiveIntensity={0.08} />
      </mesh>
    </Float>
  );
}

export default function FloatingRings() {
  return (
    <group position={[1.2, 0.8, 0]}>
      <Ring position={[-0.36, 0, 0]} rotation={[0.4, 0.25, 0.18]} />
      <Ring position={[0.38, 0.05, -0.05]} rotation={[-0.3, -0.2, -0.1]} scale={0.92} />
    </group>
  );
}
