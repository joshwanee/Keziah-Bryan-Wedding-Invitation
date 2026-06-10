import { Float } from '@react-three/drei';

const petals = [
  [-2.5, 1.8, -1], [-1.8, -1.2, 0], [2.2, 1.7, -1], [2.8, -0.8, 0], [0.2, 2.5, -2], [-3, 0.2, -2],
];

export default function RosePetals() {
  return petals.map((position, i) => (
    <Float key={i} speed={0.9 + i * 0.08} floatIntensity={1.2} rotationIntensity={1.3}>
      <mesh position={position} rotation={[i * 0.4, i * 0.7, i * 0.2]} scale={0.22 + (i % 3) * 0.04}>
        <sphereGeometry args={[1, 18, 18, 0, Math.PI * 2, 0, Math.PI / 2]} />
        <meshStandardMaterial
          color={i % 2 ? '#F8E9D2' : '#E3C289'}
          roughness={0.45}
          metalness={0.08}
          emissive={i % 2 ? '#F6E7CD' : '#D9B777'}
          emissiveIntensity={0.04}
        />
      </mesh>
    </Float>
  ));
}
