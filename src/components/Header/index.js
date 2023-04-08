import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../../utils'

const index = () => {
  return (
    <header className='header'>
      <Link to="/">
        <img src={images.logo} alt="catwiki logo" className='header__logo' />
      </Link>
    </header>
  )
}

export default index
