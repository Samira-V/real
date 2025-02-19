import React, { useContext } from 'react'
import { Container, Row, Col } from 'react-bootstrap'
import RoomsItem from './RoomsItem'

import datasContext from '../../../contexts/DatasContext'





export default function HotelRooms() {
    const contextData = useContext(datasContext)
    return (
        <Container>
            <Row>
                {contextData.datasInfo.map((data)=>(

                <Col key={data.id} lg={4} md={6} sm={12}>
                    <RoomsItem {...data} key={data.id} ></RoomsItem>
                </Col>
                )
                )}
              
            </Row>
        </Container>
    )
}
