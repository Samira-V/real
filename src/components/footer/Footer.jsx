import React from 'react'
import './footer.css'
import AboutFooter from './AboutFooter'
// import { Container } from 'react-bootstrap'
export default function Footer() {
    return (
        <div className='footer-section'>
            <div className="room-pic">
                
                 <div className="container">
                    <div className="row">
                   
                    <img className='footer-img' src="1.jpg " alt="" />
                    <img className='footer-img' src="2.jpg " alt="" />
                    <img className='footer-img' src="3.jpg " alt="" />
                    <img className='footer-img' src="4.jpg " alt="" />


                    </div>
                 </div>
            </div>
            <AboutFooter></AboutFooter>
        </div>
    )
}
