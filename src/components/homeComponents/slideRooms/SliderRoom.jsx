import Carousel from 'react-bootstrap/Carousel';
import React from 'react'
import { CiLocationOn } from "react-icons/ci";
import { GoPaperAirplane } from "react-icons/go";
import { LuBath } from "react-icons/lu";
import { IoBedOutline } from "react-icons/io5";
import { GiResize } from "react-icons/gi";
import { GiHomeGarage } from "react-icons/gi";
import { CiHeart } from "react-icons/ci";
import './sliderRoom.css'
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

function DarkVariantExample(props) {
  return (
    <Carousel slide='false' >
      <Carousel.Item>

      </Carousel.Item>
      <Carousel.Item>
        <Card style={{ marginTop: 20 }}>
          <CiHeart


            style={{ position: 'absolute', right: 10, fontSize: 24, top: 10, color: '#fff' }} />

          <Card.Body>
            <Card.Title>Country Style House with beautiful garden and terrace</Card.Title>

          </Card.Body>
          <ListGroup className="list-group-flush">
            <ListGroup.Item>
              <div style={{ color: '#8f8fa8', display: 'flex', justifyContent: 'space-between' }}>
                <span><CiLocationOn></CiLocationOn>Location</span>
                <span><GoPaperAirplane />Show On Map</span>
              </div>
            </ListGroup.Item>
            {/* <ListGroup.Item>
              <p>
                Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit...
               

              </p>
            </ListGroup.Item> */}
            <ListGroup.Item>
              <div className="room-features">
                <div className="room-infos">
                  <div className="size room-info">
                    <p>Lot Size</p>
                    <div className='room-deateils'>
                      <GiResize />
                      <span>{props.roomSize} sqft</span>

                    </div>
                  </div>
                  <div className="beds room-info">
                    <p>baths</p>
                    <div className='room-deateils'>
                      <LuBath />
                      <span>{props.bathrooms}</span>

                    </div>
                  </div>
                  <div className="baths room-info" >
                    <p>beds</p>
                    <div className='room-deateils'>
                      <IoBedOutline />
                      <span>{props.bedrooms}</span>

                    </div>
                  </div>
                  <div className="garage room-info">
                    <p>garage</p>
                    <div className='room-deateils'>
                      <GiHomeGarage />
                      <span>2</span>

                    </div>
                  </div>
                </div>
              </div>

            </ListGroup.Item>
          </ListGroup>
          <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
            <Card.Body href="#">
              <p style={{ color: '#8f8fa8', fontSize: 12,  }}>For Sale</p>
              <span style={{ fontSize: 22, fontWeight: 500 }}>1250000$</span>
            </Card.Body>
            <button className='property-btn' >View Property</button>
          </Card.Body>
        </Card>


      </Carousel.Item>
      <Carousel.Item>


      </Carousel.Item>
    </Carousel>
  );
}

export default DarkVariantExample;