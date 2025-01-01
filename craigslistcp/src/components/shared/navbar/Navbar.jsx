import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import logo from '../../../assets/home/navbar/logo.png'; 

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation(); 

  const getActiveClass = (path) => {
    return location.pathname === path ? 'nav-item active' : 'nav-item';
  };

  return (
    <nav className='navbar'>
      <div className='nav-content'>
        {/* Logo */}
        <Link to='/' className='logo'>
          <img src={logo} alt="Craigslist Logo" className="logo-image" />
        </Link>

        {/* Desktop nav items */}
        <div className='nav-links desktop-only'>
          <Link to='/' className={getActiveClass('/')}>Home</Link>
          <Link to='/for-sale' className={getActiveClass('/for-sale')}>For Sale</Link>
          <Link to='/housing' className={getActiveClass('/housing')}>Housing</Link>
          <Link to='/work' className={getActiveClass('/work')}>Work</Link>
          <Link to='/forum' className={getActiveClass('/forum')}>Forum</Link>
          <Link to='/events' className={getActiveClass('/events')}>Events</Link>
          <Link to='/community' className={getActiveClass('/community')}>Community</Link>
        </div>

        {/* Desktop auth buttons */}
        <div className='nav-auth desktop-only'>
          <Link to='/signup' className='btn btn-signup'>Sign Up</Link>
          <Link to='/login' className='btn btn-login'>Login</Link>
        </div>

        {/* Hamburger menu button */}
        <button className='menu-toggle' onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>

      {/* Mobile slide-in menu */}
      <div className={`mobile-menu ${isMenuOpen ? 'active' : ''}`}>
        <div className='mobile-menu-content'>
          <button className='close-menu' onClick={() => setIsMenuOpen(false)}>×</button>

          <div className='mobile-auth'>
            <Link to='/signup' className='btn btn-signup'>Sign Up</Link>
            <Link to='/login' className='btn btn-login'>Login</Link>
          </div>

          <div className='mobile-nav-links'>
            <Link to='/' className={getActiveClass('/')}>Home</Link>
            <Link to='/for-sale' className={getActiveClass('/for-sale')}>For Sale</Link>
            <Link to='/housing' className={getActiveClass('/housing')}>Housing</Link>
            <Link to='/work' className={getActiveClass('/work')}>Work</Link>
            <Link to='/forum' className={getActiveClass('/forum')}>Forum</Link>
            <Link to='/events' className={getActiveClass('/events')}>Events</Link>
            <Link to='/community' className={getActiveClass('/community')}>Community</Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className='menu-overlay' onClick={() => setIsMenuOpen(false)} />}
    </nav>
  );
};


export default Navbar;