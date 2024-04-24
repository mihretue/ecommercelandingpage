import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ToggleIcon from '../icons/menu-burger.png'
import Imagelogo from '../images/main-logo.png'

import SearchIcon from '../icons/loupe.png'


const Header = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  return (
    <header id="header" className="site-header header-scrolled position-fixed text-black bg-light">
      <nav id="header-nav" className="navbar navbar-expand-lg px-3 mb-3">
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            <img src={Imagelogo} alt='img logo' className="logo"/>
          </Link>
          <button className="navbar-toggler d-flex d-lg-none order-3 p-2" type="button" onClick={toggleMenu}>
            <img className='navbar-icon' src={ToggleIcon} alt='toggler' />
          </button>
          <div className={`offcanvas offcanvas-end ${showMenu ? 'show' : ''}`} tabIndex="-1" id="bdNavbar" aria-labelledby="bdNavbarOffcanvasLabel">
            <div className="offcanvas-header px-4 pb-0">
              <Link className="navbar-brand" to="/">
                <img src={Imagelogo} alt='imag' className="logo"/>
              </Link>
              <button type="button" className="btn-close btn-close-black" aria-label="Close" onClick={toggleMenu}></button>
            </div>
            <div className="offcanvas-body">
              <ul id="navbar" className="navbar-nav text-uppercase justify-content-end align-items-center flex-grow-1 pe-3">
                <li className="nav-item">
                  <Link className="nav-link me-4 active" to="/billboard">Home</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/company">Services</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/mobile-products">Products</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/smart-watches">Watches</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/yearly-sale">Sale</Link>
                </li>
                <li className="nav-item">
                  <Link className="nav-link me-4" to="/latest-blog">Blog</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
