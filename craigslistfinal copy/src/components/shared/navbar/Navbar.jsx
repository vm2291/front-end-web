import React, { useState } from 'react';
import './navbar.css';
import { Link } from 'react-router-dom';
import logo from '../../../assets/home/navbar/logo.png'; // Import the logo

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='navbar'>
      <div className='nav-content'>
        {/* Logo */}
        <Link to='/' className='logo'>
          <img src={logo} alt="Craigslist Logo" className="logo-image" />
        </Link>

        {/* Desktop nav items */}
        <div className='nav-links desktop-only'>
          <Link to='/' className='nav-item active'>Home</Link>
          <Link to='/for-sale' className='nav-item'>For Sale</Link>
          <Link to='/housing' className='nav-item'>Housing</Link>
          <Link to='/work' className='nav-item'>Work</Link>
          <Link to='/forum' className='nav-item'>Forum</Link>
          <Link to='/events' className='nav-item'>Events</Link>
          <Link to='/community' className='nav-item'>Community</Link>
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
            <Link to='/' className='nav-item active'>Home</Link>
            <Link to='/for-sale' className='nav-item'>For Sale</Link>
            <Link to='/housing' className='nav-item'>Housing</Link>
            <Link to='/work' className='nav-item'>Work</Link>
            <Link to='/forum' className='nav-item'>Forum</Link>
            <Link to='/events' className='nav-item'>Events</Link>
            <Link to='/community' className='nav-item'>Community</Link>
          </div>
        </div>
      </div>

      {/* Overlay for mobile menu */}
      {isMenuOpen && <div className='menu-overlay' onClick={() => setIsMenuOpen(false)} />}
    </nav>
  );
};

export default Navbar;