import React from 'react'
import ProductDetail from './productdetail-components/ProductDetail'
import TopMenu from './productdetail-components/TopMenu'
import Main from './productdetail-components/Main'
import SpecificationTable from './productdetail-components/SpecificationTable'
import Similler from './productdetail-components/Similler'
import Installment from './productdetail-components/Installment'
import FAQSection from './productdetail-components/Faqs'
import ProductRecommendations from './productdetail-components/Recomended'

const Productdetail = () => {
  return (
    <div>
      <TopMenu/>
      <ProductDetail/>
      <Main/>
      <SpecificationTable/>
      <Similler/>
      <Installment/>
      <FAQSection/>
      <ProductRecommendations/>
    </div>
  )
}

export default Productdetail
