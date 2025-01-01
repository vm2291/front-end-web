import React from 'react';
import './Footer.css';
import craigslistLogoWhiteText from '../../../assets/craigslistLogoWhiteText.svg';
import '@fortawesome/fontawesome-free/css/all.min.css'; // Import FontAwesome CSS

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Logo First */}
        <div className="footer-brand">
          <img
            src={craigslistLogoWhiteText}
            alt="Craigslist Logo"
            className="footer-logo"
          />
          <div className="social-icons">
            <i className="fab fa-facebook"></i>
            <i className="fab fa-instagram"></i>
            <i className="fab fa-linkedin"></i>
          </div>
        </div>

        {/* Columns */}
        <div className="footer-columns">
          <div>
            <h4>Craigslist</h4>
            <ul>
              <li>Best of craigslist</li>
              <li>About craigslist</li>
              <li>Craigslist is hiring</li>
              <li>What’s new</li>
            </ul>
          </div>
          <div>
            <h4>Info</h4>
            <ul>
              <li>Avoid scams & fraud</li>
              <li>Sitemap</li>
              <li>FAQ</li>
              <li>Personal Safety tips</li>
            </ul>
          </div>
          <div>
            <h4>Support</h4>
            <ul>
              <li>Help Center</li>
              <li>Contact us</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
            </ul>
          </div>
          <div>
            <h4>Other</h4>
            <ul>
              <li>Craig Newmark Philanthropies</li>
              <li>Charitable Craigslist</li>
              <li>System Status</li>
              <li>Legal</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <hr />
        <p>All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
