import React from 'react'

const FormCheckBox = ({label, name, size, defaultValue}) => {
  return (
    <div className='form-control items-center'>
        <label htmlFor={name} className='label cursor-poiter'>
            <span className='label-text capitalize'>{label}</span>
        </label>
        <input type="checkbox" name={name}  defaultChecked={defaultValue} className={`checkbox checbox-primary ${size}`}/>
    </div>
  )
}

export default FormCheckBox