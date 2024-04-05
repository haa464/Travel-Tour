import React from 'react'
import './achievements.css'
import { awards } from '../../constent'
import CountUp from 'react-countup';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const AwardCard = ({ award: { icons, title, start, end, sign } }) => (
  <div className="col-lg-3">
    <div className="app__laurels_awards-card">
      <div className="app_img">
        <span><FontAwesomeIcon icon={icons}  /></span>
      </div>
      <div className="app__laurels_awards-card_content">
        
        <p className="p__cormorant"><CountUp start={start} end={end} duration={4}/><span>{sign}</span></p>
        <h3 className="p__opensans">{title}</h3>
      </div>
    </div>
  </div>
);

const Achievements = () => {
  return (
    <div className='achievem_content'>
      <div className="container">
        <div className="title_recon">
          <div className="header_title">
            <div className="header_title_span">
              <span>Company Fact</span>
            </div>
            <h2 className="header_title_h2">Achievements</h2>
          </div>
        </div>
        <div className="box_design">
          <div className="row">
            
              {awards.map((award) => <AwardCard award={award} key={award.title} />)}
            
          </div>
        </div>
      </div>
    </div>
  )
}

export default Achievements