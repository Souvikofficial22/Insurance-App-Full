import React from 'react'
import Navbar from '../Layouts/Navbar/Navbar'
import ImageContainer from './ImageContainer/ImageContainer'
import Footer from '../Layouts/Footer/Footer'
import CardList from './CardList/CardList'

const HomePage = () => {
  const user={
    role : "",
    username: ""
  }
  return (
    <div className="mycontainer">
      <header><Navbar user={user}/></header>
        <main>
        <ImageContainer />
        {/* <CardList /> */}
        </main>
        <footer><Footer /></footer>
    </div>
  )
}

export default HomePage