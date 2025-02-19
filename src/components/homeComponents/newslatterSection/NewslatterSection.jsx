import React from 'react'
import './newslatterSection.css'
import { Col, Container, Form, Row } from "react-bootstrap"
export default function
    () {
    return (
        <div className='newslatter-section'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <img src="message.png" alt="" />
                        <h4 className='title'>Join Our Mailing to get weekly update <br></br>on our exclusive deal.</h4>
                        <Form >
                            <input type="email" className='newslatter-input' placeholder="Your Email Address" />
                            <button type="submit" className='newslatter-btn' >Subscribe!</button>
                        </Form>

                    </Col>
                </Row>
            </Container>

        </div>
    )
}
