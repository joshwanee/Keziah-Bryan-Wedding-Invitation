import Home from './pages/Home';
import Scene from './three/Scene';

export default function App() {
  return (
    <>
      <Scene />
      <div className="relative z-10">
        <Home />
      </div>
    </>
  );
}