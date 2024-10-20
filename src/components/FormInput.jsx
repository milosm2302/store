import React from 'react'

const FormInput = ({label, name, type, defaultValue, size}) => {
  return (
    <div className="form-control">
  <label className="label" htmlFor={name}>
    <span className="label-text uppercase">{label}</span>
    
  </label>
  <input 
  type={type}
  name={name}
  autoComplete="on"
  defaultValue={defaultValue}
  className={`input input-bordered ${size}`} />
  
</div>
  )
}

export default FormInput