import React from 'react'
import './footer.css'
import Upftr from './Upftr/Upftr'
import Midftr from './Midftr/Midftr'

const Footer = () => {
  return (
    <footer className='footer_container'>
      <div className="container">
        <div className="uper_footer">
          <Upftr />
        </div>
        <div className="middle_footer">
          <Midftr />
        </div>
      </div>
    </footer>
  )
}

export default Footer