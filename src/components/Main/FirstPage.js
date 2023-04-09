import React from 'react'

import { images } from '../../utils'
import BreedSearchForm from '../CatBreed/SearchForm'
import BreedShowPage from '../CatBreed/ShowPage'
import CatInfo from '../Info'

const FirstPage = () => {
  return (
    <>
      <div className="d-flex flex-column">
        {/* front page content */}
        <div className="main__front">
          <div className="d-flex align-items-center">
            <h1 className='main__heading visually-hidden'>CatWiki</h1>
            <div>
              <img src={images.catWhite} alt="catWiki-logo" />
            </div>
          </div>
          <p>
            Get to know more about your cat breed
          </p>
          {/* breed search  */}
          <BreedSearchForm />
        </div>
        {/* breed info section  */}
        <BreedShowPage />
      </div>

      {/* cat info section  */}
      <CatInfo />
    </>
  )
}

export default FirstPage
