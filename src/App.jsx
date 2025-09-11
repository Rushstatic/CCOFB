
import Navbar from './components/Navbar';
import Items from './components/items';
import ParticlesBackground from './components/ParticlesBackground';
import Orb from './components/GradientBlinds';
import { Routes, Route } from 'react-router-dom';
import './App.css';
import Showcase from './pages/Showcase';
import Home from './pages/Home.jsx';
import Docs from './pages/Docs.jsx';


function MainContent() {
  return (
    <div className="App">
      {/* 1) Background at z-index 0 */}
      <div className="background-layer" />
<ParticlesBackground />
      {/* 2) Orb at z-index 1 */}
      <div className="orb-layer">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* ✅ 3) Fixed Navbar — separate from animated content */}
      <Navbar className="navi" />

      {/* 4) Foreground Content */}
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


export default function App() {
  return <MainContent />;
}


