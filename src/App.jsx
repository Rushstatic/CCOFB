import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Items from './components/items';
import ParticlesBackground from './components/ParticlesBackground';
import Orb from './components/GradientBlinds';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Showcase from './pages/Showcase';
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';

function App() {
  const [isDark, setIsDark] = useState(false);

  useEffect(() => {
    document.body.classList.toggle('dark-mode', isDark);
  }, [isDark]);

  return (
    <div className="App">
      {/* Theme Toggle Button */}
      <button onClick={() => setIsDark(prev => !prev)} className="theme-toggle">
        {isDark ? '🌙 Dark Mode' : '☀️ Light Mode'}
      </button>

      {/* Background */}
      <div className="background-layer" />
      <ParticlesBackground />

      {/* Orb */}
      <div className="orb-layer">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* Navbar */}
      <Navbar className="navi" />

      {/* Foreground Content */}
      <div className="foreground">
        <Routes>
          <Route path="/" element={<Items />} />
          <Route path="/docs" element={<Docs />} />
          <Route path="/showcase" element={<Showcase />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;


