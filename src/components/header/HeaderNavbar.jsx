import { Nav, Navbar, Container } from 'react-bootstrap';
import { FaPinterest } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { AiFillTwitterCircle } from "react-icons/ai"
import React from 'react'
import { Link } from 'react-router-dom';
import './headerNavbar.css'

export default function HeaderNavbar() {
    return (
        <Navbar collapseOnSelect expand="lg" variant='dark' >
            <Container fluid style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%', marginTop: 20 }}>
                <Navbar.Brand to="home" style={{ fontSize: 25 }}>Real Estate</Navbar.Brand>

                <Navbar.Collapse id="responsive-navbar-nav" style={{ display: 'flex', justifyContent: 'space-evenly', alignItems: 'center' }}>
                    <Nav className="me-auto ">
                        <Link to="/" className = "link" >Home</Link>
                        <Link to="/searchResult"className = "link"  >Search Result</Link>

                        <Link className = "link" to="/categories"  >Categories</Link>
                        <Link to="/singleProperty" className = "link" >Single Property</Link>
                        <Link to="/blog" className = "link" >Blog</Link>
                        <Link to="/contact"className = "link"  >Contact</Link>

                    </Nav>
                    <Nav style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginLeft: 10 }}>
                        <Link to="/pinterest"className = "icon-link"  ><FaPinterest style={{ marginTop: 10, marginLeft: 10 }} /></Link>
                        <Link to="/facebook" className = "icon-link" >
                            <FaFacebook style={{ marginTop: 10, marginLeft: 10 }} />
                        </Link>
                        <Link to="/twitter" className = "icon-link" >
                            <AiFillTwitterCircle style={{ marginTop: 10, marginLeft: 10 }} />
                        </Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}
