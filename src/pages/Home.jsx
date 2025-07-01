import React from 'react'
import TopMenu from './Home-components/TopMenu'
import Hero from './Home-components/Hero'
import ProductSlider from './Home-components/ProductSlider'
import ProductSlider2 from './Home-components/ProductSlider-2'
import ProductSlider3 from './Home-components/ProductSlider-3'
import BestSeller from './Home-components/BestSeller'
import Reviews from './Home-components/Review'
import ProductSlider4 from './Home-components/ProductSlider4'
import ProductSlider5 from './Home-components/ProductSlider5'
import ProductSlider6 from './Home-components/ProductSlider6'
import Official from './Home-components/Official'
import ProductSlider7 from './Home-components/ProductSlider7'
import ProductSlider8 from './Home-components/ProductSlider8'
import ReasonsToBuy from './Home-components/Reason'
import ProductSlider9 from './Home-components/ProductSlider9'
import ProductSlider10 from './Home-components/ProductSlider10'
import Recomended from './Home-components/Recomended'
import SummerSale_Banner from './Home-components/SummerSale_Banner'
import Card_Banner from './Home-components/Card_Banner'
import Features from './Home-components/Features'
import Brand from './Home-components/Brand'

const Home = () => {
  return (
    <div>
      <TopMenu/>
      <Hero/>
      <SummerSale_Banner/>
      <ProductSlider2/>
      <Card_Banner/>
      <ProductSlider3/>
      <BestSeller/>
      <ProductSlider/>
      <Reviews/>
      <ProductSlider4/>
      <ProductSlider5/>      
      <ProductSlider6/>
      <Brand/>
      <Official/>
      <ProductSlider7/>
      <ProductSlider8/>
      <ReasonsToBuy/>
      <ProductSlider9/>
      <ProductSlider10/>
      <Recomended/>
      <Features/>
    </div>
  )
}

export default Home
