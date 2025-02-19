import React from 'react'
import { Container , Row ,Col } from 'react-bootstrap'
import SliderRoom from './SliderRoom'
import './sliderRoom.css'
import datas from '../../../Datas'

export default function sliderSection() {
  return (
    <div className='slider-container'>

    <Container >
        <Row>
        {datas.map((data)=>(
            
            <Col key = {data.id} lg={6} md={12} style={{position:'absolute' , right: 0 , display:'flex' , alignItems:'center', justifyContent:'center',top:0}}>
                <SliderRoom {...data}></SliderRoom>
            </Col>
            
        ))}
        </Row>
    </Container>

    </div>
  )
}
