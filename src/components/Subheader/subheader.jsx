import React from 'react'
import './subheader.css'

const Subheader = ({ subtitle, title }) => {
  return (
    <div className='subhed_content'>
        <div className="up_cnt_header">
            <div className="box_heade">
                <span className='small_title'>{subtitle}</span>
            </div>
            <div className="box_h2">
                <h2 className='title_h2'>{title}</h2>
            </div>
        </div>
    </div>
  )
}

export default Subheader