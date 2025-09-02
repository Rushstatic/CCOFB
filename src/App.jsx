// App.jsx
import Navbar from './components/Navbar';
import Items from './components/items';
import Tagline from './components/items';
import Orb from './components/GradientBlinds';
import './App.css';


function App() {
  return (
    <div className="App">
      {/* 1) Background at z-index 0 */}
      <div className="background-layer" />

      {/* 2) Orb at z-index 1 */}
      <div className="orb-layer">
        <Orb
          hoverIntensity={0.5}
          rotateOnHover={true}
          hue={0}
          forceHoverState={false}
        />
      </div>

      {/* 3) Content at z-index 2 */}
      <div className="foreground">
        <Navbar />
        <Items />
      </div>
    </div>
  );
}

export default App;
