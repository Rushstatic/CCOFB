import { useState } from 'react';
import './Navbar.css';

export default function Navbar() {
  const items = [' Home', ' Docs', ' Items'];
  const [active, setActive] = useState('Home');

  return (
    <nav className="navbar">
      {items.map(item => (
        <button
          key={item}
          className={`nav-item ${item === active ? 'active' : ''}`}
          onClick={() => setActive(item)}
        >
          {item === active && <span className="dot" />}
          {item}
        </button>
      ))}
    </nav>
  );
}

