import React from 'react'
import './homepage.scss'
import { Link } from 'react-router-dom'

const Homepage = () => {
  return (
    <div className='homepage'>
      <div className='homepageItems'>
        <Link to='/searchfilter' className='homepageItem'>Search Filter</Link>
        <Link to='/quizapp' className='homepageItem'>Quiz App</Link>
        <Link to='/form' className='homepageItem'>Registration Form</Link>
      </div>
    </div>
  )
}

export default Homepage