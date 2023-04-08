import React from 'react'
import { images } from '../../utils'

const index = () => {
  return (
    <header className='header'>
      <img src={images.logo} alt="catwiki logo" className='header__logo' />
    </header>
  )
}

export default index
