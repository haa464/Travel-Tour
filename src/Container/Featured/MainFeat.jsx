import React from 'react'
import Subheader from '../../components/Subheader/subheader'
import Infofeat from './Infrofeat/Infofeat'
import Sliderfeat from './Sliderfeat/Sliderfeat'

const MainFeat = () => {
  return (
    <div className='main_feat' style={{marginTop:60}}>
        <div className="container">
            <div className="feat_header">
                <Subheader subtitle="Featured Tours" title="Amazing tour places around the world"/>
            </div>
            <div className="feat_slider">
                <Sliderfeat />
            </div>
            <div className="info_details">
                <Infofeat />
            </div>
        </div>
    </div>
  )
}

export default MainFeat