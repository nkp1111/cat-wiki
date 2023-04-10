import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import ImageGrid from './ImageGrid'
import "./info.css"

const index = () => {
  return (
    <section className='main__section-info'>
      <div className="container">
        <div className="row">
          <div className="col-md-6 info-text">
            <h2 className='section-heading'>Why should you have a cat?</h2>
            <p>
              Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
            </p>
            <Link to="/allBreeds"
              className='all-breed-link d-flex align-items-center'>
              READ MORE
              <CgArrowLongRight className='ms-2 long-arrow-icon' />
            </Link>
          </div>
          <div className="col-md-6">
            <ImageGrid />
          </div>
        </div>
      </div>
    </section >
  )
}

export default index
