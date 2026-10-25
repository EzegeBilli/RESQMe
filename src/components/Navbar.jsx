import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import logo from '../assets/logo.png';

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const close = () => setOpen(false);

  return (
    <header className="navbar">
      <Link to="/" onClick={close}>
        <img src={logo} alt="RESQ Logo" />
      </Link>

      <nav className={open ? 'open' : ''}>
        <NavLink to="/" end onClick={close}>Home</NavLink>
        <NavLink to="/about" onClick={close}>About</NavLink>
        <NavLink to="/pricing" onClick={close}>Pricing</NavLink>
        <NavLink to="/blog" onClick={close}>Our Blog</NavLink>
        <Link to="/#request" className="btn btn-mobile" onClick={close}>Join Waitlist</Link>
      </nav>

      <a href="#request" className="btn btn-desktop">Join Waitlist</a>

      <button
        className="menu-toggle"
        onClick={() => setOpen(!open)}
        aria-label="Toggle menu"
        aria-expanded={open}
      >
        {open ? '✕' : '☰'}
      </button>
    </header>
  );
}