import { Points, PointMaterial } from '@react-three/drei';
import { useMemo } from 'react';

export default function Particles() {
  const positions = useMemo(() => {
    const arr = new Float32Array(450 * 3);
    for (let i = 0; i < arr.length; i += 3) {
      arr[i] = (Math.random() - 0.5) * 11;
      arr[i + 1] = (Math.random() - 0.5) * 8;
      arr[i + 2] = (Math.random() - 0.5) * 5;
    }
    return arr;
  }, []);

  return (
    <Points positions={positions} stride={3} frustumCulled>
      <PointMaterial transparent color="#F5F5E9" size={0.05} sizeAttenuation depthWrite={false} opacity={0.95} />
    </Points>
  );
}
