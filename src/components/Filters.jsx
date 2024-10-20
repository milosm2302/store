import {Form, useLoaderData, Link} from 'react-router-dom'

import FormInput from './FormInput'
import FormSelect from './FormSelect'
import FormRange from './FormRange'
import FormCheckBox from './FormCheckBox'

const Filters = () => {
  const {meta, params} = useLoaderData();
  console.log(meta.categories)
  const {search, company, category, shipping, order, price} = params
  return (
    <Form className='bg-base-200 rounded-md px-8 grid py-4 gap-x-4 gap-y-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 items-center'>
      <FormInput type="search" label='search product' name="search" size='input-sm' defaultValue={search}/>
      <FormSelect label="Select Category" name='category' list={meta.categories} size="select-sm" defaultValue={category} />
      <FormSelect label="Select Company" name='company' list={meta.companies} size="select-sm" defaultValue={company}/>
      <FormSelect label="Sort By" name='order' list={['a-z', 'z-a', 'high', 'low']} size="select-sm" defaultValue={order}/>
      <FormRange name="price" label="select price" size="range-sm" price={price}/>
      <FormCheckBox label="free shipping" name="shipping" size="checkbox-sm" defaultValue={shipping}/>
      <button type="submit" className='btn btn-primary btn-sm'>
        SEARCH
        </button>
        
        <Link to="/products" className='btn btn-accent btn-sm '>RESET</Link>
    </Form>
  )
}

export default Filters