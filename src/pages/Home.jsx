import React from 'react'
import News from '../components/News'
import banner from '../assets/images/banner.png'

const Home = () => {
  return (
    <div>
      <img
      src={banner} 
      className='banner'
      alt="banner de la página"
      />
      <News/>
    </div>
  )
}

export default Home