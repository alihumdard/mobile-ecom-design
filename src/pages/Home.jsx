import React from 'react'
import TopMenu from './component/TopMenu'
import Hero from './component/Hero'
import Main from './component/Main'
import ProductSlider from './component/ProductSlider'
import ProductSlider2 from './component/ProductSlider-2'
import ProductSlider3 from './component/ProductSlider-3'

const Home = () => {
  return (
    <div>
      <TopMenu/>
      <Hero/>
      <Main/>
      <ProductSlider/>
      <ProductSlider2/>
      <ProductSlider3/>
    </div>
  )
}

export default Home
