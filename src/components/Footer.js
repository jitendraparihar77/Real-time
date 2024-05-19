import React from 'react';
// import './Footer.css'; // Import CSS file

function Footer() {
  return (
    <footer>
      <div className="footer-content">
        {/* <p>&copy; {new Date().getFullYear()} Your Company. All rights reserved.</p> */}
        <ul className="social-links">
          <li><a href="https://facebook.com" target="_blank" rel="noopener noreferrer">Facebook</a></li>
          <li><a href="https://twitter.com" target="_blank" rel="noopener noreferrer">Twitter</a></li>
          <li><a href="https://instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
          <li><a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
