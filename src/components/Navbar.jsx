import './Navbar.css';

function Navbar() {
  const navItems = ['Home', 'Docs', 'Items'];
  const active = 'Home';

  return (
    <a className="Navbar" href="#"> 
      {navItems.map(item => (
        <div
          key={item}
          className={`Nav-item ${item === active ? 'active' : ''}`}
          onClick={() => setActive(item)}
        >
          {item === active && <span className='dot' />}
          {item}
        </div>
      ))}
    </a>
  );
}

export default Navbar;
