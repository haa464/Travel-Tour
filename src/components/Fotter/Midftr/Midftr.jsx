import React from 'react'
import './Midftr.css'
import mftr1 from '../../../assets/logo-white.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faFacebook, faFacebookMessenger, faInstagram, faLinkedin, faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faLocation, faPhoneFlip } from '@fortawesome/free-solid-svg-icons'

const Midftr = () => {
  return (
    <div className='midftr_content'>
      <div className="cnt_ft_bx">
        <div className="row">
          <div className="col-lg-3">
            <div className="about_cnt">
              <div className="header_abt_ft">
                <img src={mftr1} alt="Logo" />
                <p>To take trivial example which us ever undertakes laborious physica exercise except obsome.</p>
              </div>
              <div className="sial_ftr">
                <div className="scil_cnt">
                  <span className='span_sl'><FontAwesomeIcon icon={faTwitter} /></span>
                  <span className='span_sl'><FontAwesomeIcon icon={faFacebook} /></span>
                  <span className='span_sl'><FontAwesomeIcon icon={faInstagram} /></span>
                  <span className='span_sl'><FontAwesomeIcon icon={faLinkedin} /></span>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-2">
            <div className="page_cnt">
              <div className="header_page">
                <h2 className='title_ftr'>Pages</h2>
              </div>
              <div className="ul_link">
                <ul className='ft_ul'>
                  <li className='ft_li'><a href='#'>About Us</a></li>
                  <li className='ft_li'><a href='#'>Community blog</a></li>
                  <li className='ft_li'><a href='#'>Work with us</a></li>
                  <li className='ft_li'><a href='#'>Privacy policy</a></li>
                  <li className='ft_li'><a href='#'>Contact Us</a></li>
                </ul>
              </div>
            </div>
          </div>
          <div className="col-lg-4">
            <div className="news_cnt">
              <div className="header_newsletter">
                <h2 className='title_ftr'>Newsletter</h2>
              </div>
              <div className="par_p">
                <p>Subscribe our newsletter to get our latest update & news.</p>
              </div>
            </div>
          </div>

          <div className="col-lg-3">
            <div className="page_cnt">
              <div className="header_contact">
                <h2 className='title_ftr'>Contact</h2>
              </div>
              <div className="line_contact">
                <div className="detail_cnt_ft">
                  <div className="phone_ft_cnt">
                    <div className="img_ph_ft">
                      <span><FontAwesomeIcon icon={faPhoneFlip} /></span>
                    </div>
                    <div className="ph_nmb">
                      <h3 className='title'>Drop a Line</h3>
                      <p className='desc_ft text-white'>+00 (123) 456 889</p>
                    </div>
                  </div>

                  <div className="phone_ft_cnt mt-3">
                    <div className="img_ph_ft">
                      <span><FontAwesomeIcon icon={faEnvelope} /></span>
                    </div>
                    <div className="ph_nmb">
                      <h3 className='title'>Email Address</h3>
                      <p className='desc_ft text-white'>contact@example.com</p>
                    </div>
                  </div>

                  <div className="phone_ft_cnt mt-3">
                    <div className="img_ph_ft">
                      <span><FontAwesomeIcon icon={faLocation} /></span>
                    </div>
                    <div className="ph_nmb">
                      <h3 className='title'>Visit office</h3>
                      <p className='desc_ft text-white'>583 Main Street, NY, USA</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Midftr