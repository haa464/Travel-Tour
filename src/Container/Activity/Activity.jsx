import React from 'react'
import './Activity.css'
import Subheader from '../../components/Subheader/subheader'
import activity1 from '../../assets/image-6.jpg'
import activity2 from '../../assets/people.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTentArrowDownToLine } from '@fortawesome/free-solid-svg-icons'

import { GiRabbit, GiBoatFishing } from "react-icons/gi";
import { BsRouter } from "react-icons/bs";
import { GrYoga } from "react-icons/gr";
import { LiaSolarPanelSolid, LiaBikingSolid  } from "react-icons/lia";

const activitlists = [
    {
      iconArray: [<GiRabbit key="rabbit" />],
      title: 'Tent camping',
    },
  
    {
      iconArray: [<BsRouter key="rabbit" />],   
      title: 'Adventure travel',
    },
  
    {
        iconArray: [<LiaSolarPanelSolid key="rabbit" />],
        title: 'Mountain biking',
    },
  
    {
        iconArray: [<LiaBikingSolid key="rabbit" />],
        title: 'Discovery world',
    },
  
    {
        iconArray: [<GiBoatFishing key="rabbit" />],
        title: 'Fishing & swimming',
    },
  
    {
        iconArray: [<GrYoga key="rabbit" />],
        title: 'Mountain hiking',
    },
  ]

const Activity = () => {
  return (
    <div className='activ_cnt'>
        <div className="back_act">
            <div className="container">
                <div className="activ_des">
                    <div className="activ_head">
                        <Subheader subtitle="Popular Activity" title="Feel real adventure and very close to nature" />
                    </div>
                    <div className="activ_resid">
                        <div className="row">
                            <div className="col-lg-4">
                                <div className="activ_list">
                                    <div className="act_list_box">
                                        <ActivitList />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className="middle_act">
                                    <div className="icon_mid">
                                        <span className='act_icons'><FontAwesomeIcon icon={faTentArrowDownToLine} /></span>
                                    </div>
                                    <div className="h2_mid">
                                        <h3 className='acivit_title'>Real adventure & enjoy your dream tours</h3>
                                        <p>Sit amet consectetur velit integer tincidunt scelerisque volutpat neque fermeny massa lacus.</p>
                                        <img className='img_sec' src={activity2} alt="" />
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-4">
                                <div className='column-inner bg-size-cover'>
                                    <div className='bg-column-inner'>
                                        <img src={activity1} alt="" />
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

const ActivitList = () => {
    return (
        <>
        {activitlists.map((activitlist, index) => (
            <div className="card_activit" key={index}>
                <div className="card_des_activit">
                    <div className="card_act_icons">
                        <span className='card_span_h3'>{activitlist.iconArray}</span>
                    </div>
                    <div className="card_title_act">
                        <h3 className='card_title_h3'>{activitlist.title}</h3>
                    </div>
                </div>
            </div>
        ))}
        </>
    )
}

export default Activity