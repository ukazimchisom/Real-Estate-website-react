import React, { useState } from 'react';
import { RiMenu3Line, RiCloseLine } from 'react-icons/ri';
import logo from '../../assets/logo.png';
import user from '../../assets/user.png';
import './navbar.css';

function Navbar() {

  const [toggleMenu, setToggleMenu] = useState(false)

  const Menu = () => (
    <>
      <p><a href="#header">Home</a></p>
      <p><a href="#aboutUs">AboutUs</a></p>
      <p><a href="#services">Services</a></p>
      <p><a href="#design">Design</a></p>
      <p><a href="#team">Projects</a></p>
      <p><a href="#footer">Contact</a></p>
    </>
  )

  return (
    <div className='navbar' id='navbar'>
      <div className="navbar__navbar-links">
        <div className="navbar__navbar-links_logo">
          <div className="navbar__navbar-links_logo_img">
            <img src={logo} alt="logo" />
          </div>
          <div className="navbar__navbar-links_logo_p">
            <p>Land<span>M</span>ark</p>
          </div>

        </div>

        <div className="navbar__navbar-links_container">
          <Menu />
        </div>
      </div>
      <div className="navbar__sign">
        <button> <img src={user} alt="user" />sign up</button>
      </div>
      <div className='navbar__navbar-menu'>
        {toggleMenu
          ? <RiCloseLine color='#ffff' size={27} onClick={() => setToggleMenu(false)} />
          : <RiMenu3Line color='#ffff' size={27} onClick={() => setToggleMenu(true)} />
        }
        {toggleMenu && (
          <div className='navbar__navbar-menu_container '>
            <div className='navbar__navbar-menu_container-links'>
              <Menu />
            </div>
            <div className='navbar__navbar-menu_container-sign'>
              <button>sign up</button>
            </div>
          </div>
        )}
      </div>

    </div>
  )
}

export default Navbar

