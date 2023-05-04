import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import ImageContainer from './ImageContainer/ImageContainer'
import Footer from '../Layouts/Footer/Footer'
import CardList from './CardList/CardList'

const HomePage = () => {
  return (
    <div className='main-container'>
        <Navbar />
        <ImageContainer />
        <CardList />
        <Footer />
    </div>
  )
}

export default HomePage