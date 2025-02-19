import { Container, Row, Col } from 'react-bootstrap';
import React from 'react'
import { RxHome } from "react-icons/rx";
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai"
import { BsTelegram } from "react-icons/bs";
import { IoLogoWhatsapp } from "react-icons/io";
import { FaRegClock } from "react-icons/fa6";
import { IoIosArrowDropright } from "react-icons/io";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import { CiMobile2 } from "react-icons/ci";
import './aboutFooter.css'

export default function home() {
    return (
        <div  style={{background:'#30304e', paddingTop:40 , paddingBottom:20 ,textAlign:'center'}}>
            <RxHome className='footer-home-icon' />
            <Container>
                <Row>
                    <Col lg={4} md={12} className='footer-col'>
                        <div className="about-footer">
                            <h5 className='footer-title'>About Homes</h5>
                            <p className='about-footer-disc'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old.</p>
                            <div className="footer-social">
                                <FaFacebook className='footer-icon' />
                                <FaPinterest className='footer-icon' />
                                <AiFillTwitterCircle className='footer-icon' />
                                <BsTelegram className='footer-icon' />
                                <IoLogoWhatsapp className='footer-icon' />
                            </div>
                        </div>
                    </Col>
                    <Col lg={4} md={12} className='footer-col'>
                        <div>
                            <h5 className='footer-title'>Latest Blog Posts</h5>
                            <div className="footer-blog">


                                <div className="footer-blog-left-side">

                                    <img src="6.jpg" className='footer-blog-img' style={{ width: 80, borderRadius: 5 }} alt="" />
                                </div>



                                <div className="footer-blog-right-side">

                                    <h6 className='footer-latest-blog-title'>How to find the perfect area for
                                        your next house</h6>
                                    <div style={{ display: 'flex' }}>

                                        <div>
                                            <FaRegClock className='footer-icon' />
                                            <span className='footer-blog-span'>5 min</span>
                                        </div>
                                        <div>
                                            <IoIosArrowDropright className='footer-icon' style={{ marginLeft: 10 }} />
                                            <a className='footer-blog-link'>Read more</a>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                        <div>

                            <div className="footer-blog">


                                <div className="footer-blog-left-side">

                                    <img src="5.jpg" className='footer-blog-img' style={{ width: 80, borderRadius: 5 }} alt="" />
                                </div>



                                <div className="footer-blog-right-side">

                                    <h6 className='footer-latest-blog-title'>How to find the perfect area for
                                        your next house</h6>
                                    <div style={{ display: 'flex' }}>

                                        <div>
                                            <FaRegClock className='footer-icon' />
                                            <span className='footer-blog-span'>5 min</span>
                                        </div>
                                        <div>
                                            <IoIosArrowDropright className='footer-icon' style={{ marginLeft: 10 }} />
                                            <a className='footer-blog-link'>Read more</a>
                                        </div>
                                    </div>


                                </div>
                            </div>

                        </div>
                    </Col>
                    <Col lg={4} md={12} className='footer-col'>
                        <h5 className='footer-title'>Get In Touch</h5>
                        <div style={{textAlign:'left'}}>

                        <div>
                            <CiLocationOn className='footer-icon' />
                            <span className='footer-address'>132 Liberty Streetelit, Plano, Texas</span>
                        </div>
                        <div>
                            <MdOutlineMail className='footer-icon' />
                            <span className='footer-address'>samiraa.vaeidi@gmail.com</span>
                        </div>
                        <div>
                            < CiMobile2 className='footer-icon' />
                            <span className='footer-address'>samiraa.vaeidi@gmail.com</span>
                        </div>
                        <span className='footer-address'>Monday – Friday: 9 am – 5 pm

                            Saturday: 9 am – 1pm</span>

                        </div>
                    </Col>
                </Row>
            </Container>
            <span  className="footer-copyRight">Copyright ©2023 All rights reserved | This template is made with  by <a href='https://colorlib.com' style={{color:'#007bff',textDecoration:'none' , cursor:'pointer'}}>Colorlib</a ></span>
        </div >
    )
}
