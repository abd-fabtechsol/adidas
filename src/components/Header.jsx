import { useState } from 'react';
import logo from '../assets/logo.png';
import burgerIcon from '../assets/burger-icon.png';
import menuCloseIcon from '../assets/menu-close-icon.png';
import searchIcon from '../assets/search-icon.png';

function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <header className="header">
      <div className="header-top">
        <div className="logo">
          <img src={logo} alt="Adidas" />
        </div>
        <div className="header-buttons desktop-only">
          <button className="btn-membership">MEMBERSHIP</button>
          <button className="btn-account">ACCOUNT</button>
        </div>
        <button className="burger-menu mobile-only" onClick={toggleMenu}>
          <img src={isMenuOpen ? menuCloseIcon : burgerIcon} alt="Menu" />
        </button>
      </div>

      <nav className={`main-nav ${isMenuOpen ? 'open' : ''}`}>
        <div className="mobile-header-buttons mobile-only">
          <button className="btn-membership">MEMBERSHIP</button>
          <button className="btn-account">ACCOUNT</button>
        </div>

        <div className="search-bar">
          <input type="text" placeholder="SEARCH" />
          <img src={searchIcon} alt="Search" className="search-icon" />
        </div>

        <ul className="nav-links">
          <li><a href="#" className="active">OUR TRACKS</a></li>
          <li><a href="#">FIND EVENTS</a></li>
          <li><a href="#">TRACK MAP</a></li>
          <li><a href="#">SHOP</a></li>
          <li><a href="#">ABOUT US</a></li>
        </ul>
      </nav>
    </header>
  );
}

export default Header;
