import { Link, useLocation } from 'react-router-dom';
import './Navbar.css';

export default function Navbar() {
  const items = ['Home', 'Docs', 'Showcase'];
  const location = useLocation();

  return (
    <nav className="navbar">
      {items.map(item => {
        const path = item.toLowerCase().trim(); // 'home', 'docs', 'showcase'
        const isActive = location.pathname === `/${path}` || (path === 'home' && location.pathname === '/');

        return (
<Link
  key={item}
  to={path === 'home' ? '/' : `/${path}`}
  className={`nav-item ${isActive ? 'active' : ''}`}
>
  {isActive && <span className="dot" />}
  {item}
</Link>

        );
      })}
    </nav>
  );
}
