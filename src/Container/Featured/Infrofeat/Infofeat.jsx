import React from 'react'
import './infofeat.css'

import { GiRabbit, GiBoatFishing } from "react-icons/gi";
import { BsRouter } from "react-icons/bs";
import { GrYoga } from "react-icons/gr";
import { LiaSolarPanelSolid, LiaBikingSolid  } from "react-icons/lia";

export const tours = [
    {
      iconArray: [<GiRabbit key="rabbit" />],
      title: 'Best Security',
      describe: 'When nothing prevents our to we like best, every pleasure to be.'
    },
    {
      iconArray: [<BsRouter key="rabbit" />],   
      title: 'Free Internet',
      describe: 'When nothing prevents our to we like best, every pleasure to be.'
    },
    {
      iconArray: [<LiaSolarPanelSolid key="rabbit" />],
      title: 'Solar Energy',
      describe: 'When nothing prevents our to we like best, every pleasure to be.'
    },
    {
      iconArray: [<LiaBikingSolid key="rabbit" />],
      title: 'Mountain Biking',
      describe: 'When nothing prevents our to we like best, every pleasure to be.'
    },
    {
      iconArray: [<GiBoatFishing key="rabbit" />],
      title: 'Swimming & Fishing',
      describe: 'When nothing prevents our to we like best, every pleasure to be.'
    },
    {
      iconArray: [<GrYoga key="rabbit" />],
      title: 'GYM and Yoga',
      describe: 'When nothing prevents our to we like best, every pleasure to be.'
    },
  ];

const Infofeat = () => {
  return (
    <div className='info_content'>
    <div className="info_bs_des">
      <div className="row">
        {tours.map((tour, index) => (
          <div className="col-lg-4" key={index}>
            <div className="bxs_design">
              <div className="des_p d_fes">
                <div className="app_des_tour">
                  <div className="tour_img">
                    {tour.iconArray} {/* Render the icon */}
                  </div>
                </div>
                <div className="desc_tours">
                  <h3 className='h3_tour'>{tour.title}</h3>
                  <p className='p_tour'>{tour.describe}</p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  </div>
  )
}

export default Infofeat