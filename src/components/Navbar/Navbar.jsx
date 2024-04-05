import React, { useState } from 'react'
import logoImg from '../../assets/logo.png'
import { NAV_LINKS } from '../../constent'
import './Navbar.css'
import { GiHamburgerMenu } from 'react-icons/gi';
import { MdOutlineRestaurantMenu } from 'react-icons/md';

const Navbar = () => {

    const [toggleMenu, setToggleMenu] = useState(false)
    
  return (
    <div className='navbar_main'>
        <div className="nav_sec">
            <nav className='navbar_header'>
                <div className="left_side">
                   <div className="left_logo">
                    <a href='/' className='site_logo'><img className='logo_img' src={logoImg} alt="logo" /></a>
                   </div>
                </div>
                <div className="right_nav_link">
                    <ul className='nav_ul'>
                        {NAV_LINKS.map((link) => (
                            <li className='nav_li'><a className="nav_link" href={link.href} key={link.key}>{link.label}</a></li>
                        ))}
                    </ul> 
                </div>
                <div className="app__navbar-smallscreen">
                    <GiHamburgerMenu color="#000" fontSize={27} onClick={() => setToggleMenu(true)} />
                    {toggleMenu && (
                    <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                        <MdOutlineRestaurantMenu fontSize={27} className="overlay__close" onClick={() => setToggleMenu(false)} />
                        <ul className="app__navbar-smallscreen_links">
                            {NAV_LINKS.map((link) => (
                                <li className='nav_li'><a className="nav_link" href={link.href} key={link.key}>{link.label}</a></li>
                            ))}
                        </ul>
                    </div>
                    )}
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar