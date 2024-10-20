import React from 'react'
import { useNavigation } from 'react-router-dom'


const SubmitBtn = ({text}) => {
  const navigation = useNavigation();
  const isSubmiting = navigation.state ==="submiting"
  return (
    <button type="submit" className='btn btn-primary btn-block uppercase' disabled={isSubmiting}>
      {isSubmiting ? (<>
      <span className='loading loading-spinner'></span>
      sending...
        </>) :(text || 'submit')}
      </button>
  )
}

export default SubmitBtn