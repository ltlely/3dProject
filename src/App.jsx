import React, { useState, useEffect, Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls, ContactShadows } from '@react-three/drei';
import Character from './models/Character';
import Header from './components/Header';
import About from './components/About';
import Experience from './components/Experience';
import Education from './components/Education';
import Projects from './components/Projects';
import Skills from './components/Skills';
import Contact from './components/Contact';
import './styles/App.css';

function App() {
  const [progress, setProgress] = useState(0);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    const duration = 9500; 
    const intervalTime = 100; 
    const totalSteps = duration / intervalTime; 
    const increment = 100 / totalSteps; 

    const interval = setInterval(() => {
      setProgress(prev => {
        if (prev >= 100) {
          clearInterval(interval);
          setAuthenticated(true);
          return 100;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="app-container">
      <div id="canvas-container">
        {progress < 100 && (
          <div className="loading-container">
            <div className="loading-text">Approving authentication...</div>
            <div className="loading-bar">
              <div className="loading-bar-progress" style={{ width: `${progress}%` }}></div>
            </div>
          </div>
        )}
        <Canvas 
          shadows
          camera={{ position: [0, 2, 5], fov: 50 }}
        >
          <OrbitControls enableZoom={false} />
          <ambientLight intensity={0.5} />
          <directionalLight position={[10, 10, 5]} intensity={1} castShadow />
          <Suspense fallback={null}>
            <Character playAnimation={progress >= 100} />
          </Suspense>
          <ContactShadows 
            position={[0, -1.05, 0]} 
            opacity={0.5} 
            scale={10} 
            blur={1} 
            far={10} 
            resolution={256} 
            color='#000000' 
          />
        </Canvas>
      </div>
    </div>
  );
}

export default App;
