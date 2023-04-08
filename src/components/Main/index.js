import React from 'react'

import { images } from '../../utils'
import BreedSearchForm from '../CatBreed/SearchForm'
import BreedShowPage from '../CatBreed/ShowPage'
import "./main.css"

const index = () => {
  return (
    <main className='main'>
      <div className="d-flex flex-column">
        {/* front page content */}
        <div className="main__front">
          <div className="d-flex">
            <h1 className='main__heading'>CatWiki</h1>
            <img src={images.catWhite} alt="cat" />
          </div>
          <p>
            Get to know more about your cat breed
          </p>
          {/* breed search  */}
          <BreedSearchForm />
        </div>
        {/* breed info content  */}
        <BreedShowPage />
      </div>

    </main>
  )
}

export default index
