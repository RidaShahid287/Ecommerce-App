import React from 'react'
import { Categories } from '../../components/Categories/Categories'
import { FeaturedProduct } from '../../components/FeaturedProduct/FeaturedProduct' 
import { Slider } from '../../components/Slider/Slider'
import {Contact} from '../../components/Contact/Contact'
import './Home.scss'

export const Home = () => {
  return (
    <div className="home">
      <Slider />
      <FeaturedProduct  type="featured"/>
      <Categories />
      <FeaturedProduct  type="trending"/> 
      <Contact />
    </div>
  )
}
