import React, { useContext } from 'react'
import { ProductContext } from '../contexts/ProductContext'

import Product from '../components/Product';

import Hero from '../components/Hero';


const Home = () => {
  const {products} = useContext(ProductContext);
  
  const FilterForProduct = products.filter(item=>{
    return item.category === "men's clothing" || item.category === "women's clothing"
  })
  console.log(FilterForProduct)


  return (<div>
            <Hero/>
              <section className='py-14'>
                <div className='container mx-auto'>
                  <div className='grid grid-cols-1 gap-3 md:grid-cols-3 lg:grid-cols-5 lx:grid-cols-5  md:max-w-none mx-auto max-w-sm'>

                    {FilterForProduct.map(item  =>{
                          return (
                                  <Product product = {item} key = {item.id}/>
                                  )
                  })}

                  </div>
                  </div>
                
              </section>
         </div>
  
)}

export default Home;