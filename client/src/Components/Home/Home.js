import React from 'react'
import image from './Pets_Bg.jpg'
import './home.css'
import Header from '../Header/Header.js'

export default function Home() {
  return (
    <div id='homepage'>
      <div className='container'>
      <Header />
        <div className='row justify-content-center'>
            <img className='img-fluid' src={image} id='home-img' alt="..." />
            <h1 className='slogan'>Open Your Heart, Open Your Home <br /> Adopt a Rescue Pet</h1>
        </div>
      </div>
    </div>
  )
}
