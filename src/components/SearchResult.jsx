import React, { useContext } from 'react'
import HeaderNavbar from './header/HeaderNavbar'
import AboutFooter from './footer/AboutFooter'
import DatasContext from '../contexts/DatasContext'
// import HotelRooms from './homeComponents/hotel-rooms/Hotel-rooms'
export default function SearchResult() {
  const contextData = useContext(DatasContext)
  return (
    <>
    <div className='header'>
      <HeaderNavbar></HeaderNavbar>
       
      <h1 className='title'>Search Result</h1>
     
      {/* {contextData.datasFilter?context.datasFilter.map(data=>{
        <RoomItem {...data}></RoomItem>
      }):''} */}
      
    </div>
<AboutFooter/>
    
    </>

  )
}
