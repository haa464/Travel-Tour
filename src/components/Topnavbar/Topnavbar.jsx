import React from 'react'
import './topnavbar.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faEnvelope, faMapLocationDot } from '@fortawesome/free-solid-svg-icons'
import { faFacebook, faGithub, faInstagram, faLinkedin } from '@fortawesome/free-brands-svg-icons'

const Topnavbar = () => {
  return (
    <div className='top_header'>
        <div className="back_topnav col_navbar">
            <div className="content_write">
                <div className="left_topnav">
                    <ul className='items_list_left'>
                        <li className='items_cnt_left d-xl-block d-lg-block d-md-block d-none'><FontAwesomeIcon icon={faMapLocationDot} /> 250 Main Street, 2nd Floor, USA</li>
                        <li className='items_cnt_left d-xl-block d-lg-block d-md-block d-none'><FontAwesomeIcon icon={faEnvelope} /> contact@example.com</li>
                    </ul>
                </div>
                <div className="right_topnav">
                    <div className="butn_link">
                        <ul className='right_list_link'>
                            <li className='right_items d-xl-block d-lg-block d-md-block'>Booking Now</li>
                            <li className='right_items d-xl-block d-lg-block d-md-block'>About</li>
                        </ul>
                    </div>
                    <div className="butn_social">
                        <div class="topbar-social d-sm-block d-none">
                            <a href="https://www.facebook.com/envato/"><FontAwesomeIcon icon={faFacebook} /></a>
                            <a href="https://twitter.com/envato/"><FontAwesomeIcon icon={faInstagram} /></a>
                            <a href="https://www.instagram.com/envato/"><FontAwesomeIcon icon={faGithub} /></a>
                            <a href="https://www.pinterest.com/envato/"><FontAwesomeIcon icon={faLinkedin} /></a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Topnavbar