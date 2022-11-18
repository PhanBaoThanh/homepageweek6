import React from 'react'
import {Link} from 'react-router-dom'
import './button.scss'
const Button = () => {
  return (
    <Link to='/' className='buttonGoBack'>Trở về</Link>
  )
}

export default Button