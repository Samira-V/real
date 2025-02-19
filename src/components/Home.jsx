import React, { useState } from 'react'
import Header from './header/Header'
import FilterForm from './homeComponents/filter-search/FilterForm'
import HotelRooms from './homeComponents/hotel-rooms/Hotel-rooms'
import SliderSection from './homeComponents/slideRooms/sliderSection'
import NewslatterSection from './homeComponents/newslatterSection/NewslatterSection'
import ServicesSection from './homeComponents/servicesSection/ServicesSection'
import Instagram from './homeComponents/instagram/instagram'
import Footer from './footer/Footer'
import  datasContext  from './../contexts/DatasContext'
import datas from './../Datas'





export default function Home() {
    const [datasInfo ] = useState(datas)
    const [datasFilter , setDatasFilter] = useState([])
   
    return (
     
        <div className='header'>
                <datasContext.Provider value={{datasInfo,
                    datasFilter,
                    setDatasFilter,
                    }}>
                <Header />

                <FilterForm />

                <HotelRooms />

                <SliderSection />
                <NewslatterSection />
                <ServicesSection></ServicesSection>
                <Instagram />
                <Footer />
                </datasContext.Provider>
            </div>
           

            )
}
