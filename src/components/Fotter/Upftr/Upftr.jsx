import React from 'react'
import Ftr1 from '../../../assets/icons/icon-headphone.png'
import Ftr2 from '../../../assets/icons/icon-travel.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowTrendUp } from '@fortawesome/free-solid-svg-icons'
import './Uptr.css'

const Upftr = () => {
  return (
    <div className='upftr_content'>
        <div className="row">
            <div className="col-lg-6">
                <div className="ftr_bx_1">
                    <div className="icons_ftr">
                        <img src={Ftr1} alt="footer phone" />
                    </div>
                    <div className="cnt_ftr">
                        <h4> Need any support for tour & travels ?</h4>
                    </div>
                    <div className="btn_ftr">
                        <a className='a_btn_frt_1' href="#"><span><FontAwesomeIcon icon={faArrowTrendUp} /></span></a>
                    </div>
                </div>
            </div>
            <div className="col-lg-6">
                <div className="ftr_bx_1">
                    <div className="icons_ftr">
                        <img src={Ftr2} alt="footer vactions" />
                    </div>
                    <div className="cnt_ftr">
                        <h4>  Ready to Get Started With Vacations!</h4>
                    </div>
                    <div className="btn_ftr">
                        <a className='a_btn_frt_2' href="#"><span><FontAwesomeIcon icon={faArrowTrendUp} /></span></a>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Upftr