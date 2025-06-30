import React from 'react'
import TopMenu from './category-components/Top-Menu'
import Hero from './Home-components/Hero'
import CategorieHero from './category-components/Category-Hero'
import Main from './category-components/Main'

const Category = () => {
  return (
    <div className='bg-slate-100'>
      <TopMenu/>
      <CategorieHero/>
      <Main/>
    </div>
  )
}

export default Category
