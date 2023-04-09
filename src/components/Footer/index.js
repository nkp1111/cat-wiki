import React from 'react'
import { Link } from 'react-router-dom'

import { images } from '../../utils'

const index = () => {
  return (
    <footer className='footer'>
      <div className="d-flex align-items-center">
        <Link to="/">
          <div className="footer__logo">
            <img src={images.catWhite} alt="cat-logo" />
          </div>
        </Link>
        <div className="footer__info">
          &copy; created by <a href="https://github.com/nkp1111">Neeraj Parmar</a> - devChallenge.io 2021
        </div>
      </div>
    </footer>
  )
}

export default index
