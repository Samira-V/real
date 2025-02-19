import React from 'react'
import { Container, Row , Col } from 'react-bootstrap'
import './instagram.css'

export default function instagram() {
    return (
        <div className='instagram-section'>
            <Container>
                <Row>
                    <Col lg={12}>
                        <h2 className='instagram-section-title' style={{color:'#000' }}>Don’t forget to follow us on Instagram @homes</h2>

                    </Col>
                </Row>
            </Container>
        </div>
    )
}
