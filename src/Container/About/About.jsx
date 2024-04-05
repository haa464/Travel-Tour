import React from 'react'
import './About.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHelmetSafety, faMoneyBillTransfer, faShield, faShieldAlt, faTrademark, faTrafficLight } from '@fortawesome/free-solid-svg-icons'
import Img1 from '../../assets/image-7.jpg'
import Img2 from '../../assets/image-8.jpg'


const About = () => {
  return (
    <div className='about_content'>
        <div className="container">
            <div className="row">
                <div className="col-lg-7">
                    <div className="image_cnt">
                        <div className="three_img">
                            <div className="first_img">
                                <img className='img_11' src={Img1} alt="adventure" />
                            </div>
                            <div className="second_img">
                                <div className="img_iner">
                                    <img className='img_22' src={Img2} alt="adventure" />
                                </div>
                            </div>
                            <div className="third_cnt">
                                <div className="cnt_bx_des">
                                    <div className="part_1">
                                        <h3>20</h3>
                                    </div>
                                    <div className="part_2">
                                        <p>Years of experience</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-lg-5">
                    <div className='subhed_content_left'>
                        <div className="up_cnt_header">
                            <div className="box_heade">
                                <span className='small_title'>Recent news feed</span>
                            </div>
                            <div className="box_h2">
                                <h2 className='title_h2_3'>Great opportunity for adventure & travels</h2>
                            </div>
                        </div>
                        <div className="rese_1">
                            <div className="res_list_1">
                                <div className="res_list_icons">
                                    <div className="res_divided">
                                        <div className="icons_res_1">
                                            <div className="icons_check"></div>
                                            <div className="icons_re1">
                                                <FontAwesomeIcon icon={faHelmetSafety} fontSize={28} />
                                            </div>
                                        </div>
                                        <div className="icons_res_cnt">
                                            <h3 class="iconbox-group-one__title">Safety first always</h3>
                                            <p>Set perspiciatis unde omnis estenatus voluptatem totarem aperiae.</p>
                                        </div>
                                    </div>
                                    <div className="res_divided">
                                        <div className="icons_res_1">
                                            <div className="icons_check"></div>
                                            <div className="icons_re1">
                                                <FontAwesomeIcon icon={faMoneyBillTransfer} fontSize={28} />
                                            </div>
                                        </div>
                                        <div className="icons_res_cnt">
                                            <h3 class="iconbox-group-one__title"> Low price & friendly</h3>
                                            <p>Quis autem vel eum iure voluptate velit esse nihile consequatur.</p>
                                        </div>
                                    </div>
                                    <div className="res_divided">
                                        <div className="icons_res_1">
                                            <div className="icons_check"></div>
                                            <div className="icons_re2">
                                                <FontAwesomeIcon icon={faTrafficLight} />
                                            </div>
                                        </div>
                                        <div className="icons_res_cnt">
                                            <h3 class="iconbox-group-one__title"> Trusted travel guide</h3>
                                            <p>At vero accusamus dignissimos ducimus blanditiis deleniti atque quos.</p>
                                        </div>
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

export default About