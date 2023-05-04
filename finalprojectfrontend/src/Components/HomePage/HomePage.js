import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import ImageContainer from './ImageContainer/ImageContainer'
import Footer from '../Layouts/Footer/Footer'
import CardList from './CardList/CardList'

const HomePage = () => {
  const role="none"
  return (
    <div className='main-container'>
        <Navbar role={role}/>
        <ImageContainer />
        <CardList />
        <Footer />
    </div>
  )
}

export default HomePage