import React from 'react'
import './Header.css'
import HeaderNavbar from './HeaderNavbar'



export default function Header() {
  return (
    <div className='header'>

      <HeaderNavbar></HeaderNavbar>

      <h2 className='title'>Find your next</h2>
      <h1 className='subTitle'>dream home.</h1>

    </div>

   
  )
}
