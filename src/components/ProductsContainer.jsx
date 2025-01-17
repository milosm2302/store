import { useState } from 'react'
import ProductsGrid from './ProductsGrid'
import ProductsList from './ProductsList'
import {BsFillGrid1X2Fill, BsCardList} from 'react-icons/bs'
import { useActionData, useLoaderData } from 'react-router-dom'

const ProductsContainer = () => {
  const {meta} = useLoaderData();
  const total  = meta.pagination.total
  const [layout, setLayout] = useState('grid')
  const setActiveStyles = (pattern)=>{
    return `text-xl btn btn-circle btn-sm ${pattern === layout ? 'btn-primary text-primary-content': 'btn-ghost text-based'}`
  }
  return (
    <>
    {/**HEADER */}
    <div className='flex justify-between items-center mt-8 border-b border-base-300 pb-5'>
    <h4 className='font-medium text-md'>
      {total} product{total > 1 && `s`}
    </h4>
    <div className="flex ga-x2">
      <button type="button" onClick={()=>setLayout('grid')} className={setActiveStyles('grid')}>
      <BsFillGrid1X2Fill/>
      </button>
      <button type="button" onClick={()=>setLayout('list')} className={setActiveStyles('list')}>
      <BsCardList/>
      </button>
    </div>
    </div>
      {/*PRODUCTS */}
        <div>
          {total === 0? <h5 className='text-2xl mt-16'>Sorry, no products in tis category....</h5> : layout ==='grid' ? <ProductsGrid/> : <ProductsList/>}
        </div>

    
    
   
    </>
  )
}

export default ProductsContainer