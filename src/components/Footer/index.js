import React from 'react'

import { images } from '../../utils'

const index = () => {
  return (
    <footer className='footer'>
      <div className="d-flex align-items-center">
        <div className="footer__logo d-flex align-items-center">
          <p>CatWiki</p>
          <img src={images.catWhite} alt="cat-logo" />
        </div>
        <div className="footer__info">
          &copy; created by <a href="https://github.com/nkp1111">Neeraj Parmar</a> - devChallenge.io 2021
        </div>
      </div>
    </footer>
  )
}

export default index
