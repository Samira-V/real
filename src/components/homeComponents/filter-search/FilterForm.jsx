
import { Container, Form, Row, Col } from 'react-bootstrap';
import { CiSearch } from "react-icons/ci";
import './filterSearch.css'
import { useState } from 'react';
import { Slider } from '@material-ui/core';
import { useContext } from 'react';
import datasContext from '../../../contexts/DatasContext';



export default function filterSearch() {

    const contextData = useContext(datasContext)
    let [country, setCountry] = useState("")
    let [propertyType, setPropertyType] = useState("")
    let [price, setPrice] = useState([50, 350])
    let [bedrooms, setBedrooms] = useState("")
    let [bathrooms, setBathrooms] = useState("")



    const submitHandler = (e) => {

        e.preventDefault()

        let SearchFilter = {
            country,
            propertyType,
            price,
            bedrooms,
            bathrooms
        }
        {
            contextData.datasInfo.map((data) => (
                (data.country === SearchFilter.country) ?
                 (contextData.setDatasFilter(prevdata => [...prevdata, data])

                ) : ''))
        }
        console.log(contextData.datasFilter)



    }
    return (
        <div className='filter-box'>

            <Container className='search-form' >
                <Row>
                    <Col className='col-lg-12' >
                        <Form onSubmit={submitHandler} >

                            <Form.Label >Location</Form.Label>
                            <Form.Select aria-label="Default select example"
                                className='select-input'
                                value={country}
                                onChange={(e) => setCountry(e.target.value)}


                            >
                                <option value="-1">Select Country</option>
                                <option value="London">Londen</option>
                                <option value="US">US</option>
                                <option value="UAE">UAE</option>
                            </Form.Select>

                            <Form.Label >Property Type</Form.Label>
                            <Form.Select aria-label="Default select example"
                                className='select-input'
                                value={propertyType}
                                onChange={(e) => setPropertyType(e.target.value)} >
                                <option value="-1">Select Type</option>
                                <option value="House">House</option>
                                <option value="Resort">Resort</option>
                                <option value="Hotel">Hotel</option>
                            </Form.Select>

                            <Form.Label >Price</Form.Label>
                            <Slider
                                min={50}
                                max={350}
                                getAriaLabel={() => 'Temperature range'}
                                value={price}
                                onChange={(e, newValue) => setPrice(newValue)}
                                valueLabelDisplay="auto"

                            />
                            {/* <input
                                className='horizontal-slider'

                                id="rangeSlider"
                                type="range"
                                min="50" max="350"
                                value={price}
                                onChange={(e) => e.target.value}
                                /> */}
                            <p style={{ color: '#8AD114' }}>Price between 50k and 350k </p>

                            <Form.Label style={{ marginTop: 20 }}>Bedrooms</Form.Label>
                            <div style={{ display: 'flex', alignItems: 'center' }}>

                                <button
                                    className='room-btn'
                                    value={1}
                                    onClick={(e) => setBedrooms(e.target.value)} >1</button>
                                <button
                                    className='room-btn'
                                    value={2}
                                    onClick={(e) => setBedrooms(e.target.value)} >2</button>
                                <button
                                    className='room-btn'
                                    value={3}
                                    onClick={(e) => { setBedrooms(e.target.value) }} >3</button>
                                <button
                                    className='room-btn'
                                    value={4}

                                    onClick={(e) => setBedrooms(e.target.value)} >4</button>
                            </div>

                            <Form.Label style={{ marginTop: 20 }}>Bathrooms</Form.Label>
                            <div style={{ display: 'flex', alignItems: 'center', marginBottom: 15 }}>

                                <button
                                    className='room-btn'
                                    value={1}
                                    onClick={(e) => setBathrooms(e.target.value)} >1</button>
                                <button
                                    className='room-btn'
                                    value={2}
                                    onClick={(e) => setBathrooms(e.target.value)} >2</button>
                                <button
                                    className='room-btn'
                                    value={3}
                                    onClick={(e) => setBathrooms(e.target.value)} >3</button>
                                <button
                                    className='room-btn'
                                    value={4}
                                    onClick={(e) => setBathrooms(e.target.value)} >4</button>
                            </div>
                            <button type='submit' className='search-btn'><CiSearch style={{ marginRight: 5 }} />Search</button>
                        </Form>

                    </Col>


                </Row>
            </Container>

        </div >
    );
}

