import React from 'react'
import { FaCheck } from "react-icons/fa";
import './ServicesSection.css'

import { Container, Row, Col } from 'react-bootstrap'
export default function ServicesSection() {
    return (
        <div className='services-section'>
            <Container>
                <Row>
                    <Col lg={6} md={12}>
                        <div className="left-side">
                        <h2 className='services-section-title'>Why choose homes?</h2>
                        <p className='services-section-subtitle'>Becouse we are the best in the business.</p>
                        <p className='services-section-disc'>
                            The standard chunk of Lorem Ipsum used since the 1500s is reproduced below for those interested. Sections 1.10.32 and 1.10.33 from "de Finibus Bonorum et Malorum" by Cicero are also reproduced in their exact original form, accompanied by English versions from the 1914 translation by H. Rackham.
                        </p>


                        </div>
                       
                    </Col>
                    <Col lg={6} md={12} >
                        <div className="right-side">
                        <ul style={{listStyle:'none'}}>
                            <li style={{ color:'#30304e',fontSize:20 , fontWeight:500 , marginBottom:20 }}>
                                 
                            <FaCheck style={{marginRight:15, color: '#8AD144', fontSize: 20 }} />
                           Contrary to popular belief, Lorem Ipsum is not simply.
                        
                            </li>
                            <li style={{ color:'#30304e',fontSize:20 , fontWeight:500 , marginBottom:20 }}>
                                 
                            <FaCheck style={{marginRight:15, color: '#8AD144', fontSize: 20 }} />
                             Contrary to popular belief.
                        
                            </li>
                            <li style={{ color:'#30304e',fontSize:20 , fontWeight:500 , marginBottom:20 }}>
                                 
                            <FaCheck style={{marginRight:15, color: '#8AD144', fontSize: 20 }} />
                             Contrary to popular belief.
                            </li>
                            <li style={{ color:'#30304e',fontSize:20 , fontWeight:500 , marginBottom:20 }}>
                                 
                            <FaCheck style={{marginRight:15, color: '#8AD144', fontSize: 20 }} />
                             Contrary to popular belief, Lorem Ipsum .
                        
                            </li>
                            <li style={{ color:'#30304e',fontSize:20 , fontWeight:500 , marginBottom:20 }}>
                                 
                            <FaCheck style={{marginRight:15, color: '#8AD144', fontSize: 20 }} />
                              popular belief, Lorem Ipsum is not simply.
                        
                            </li>
                            <li style={{ color:'#30304e',fontSize:20 , fontWeight:500 , marginBottom:20 }}>
                                 
                            <FaCheck style={{marginRight:15, color: '#8AD144', fontSize: 20 }} />
                             Contrary to popular belief, is not simply.
                        
                            </li>
                        </ul>


                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    )
}
