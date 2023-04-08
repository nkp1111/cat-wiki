import React from 'react'

import ImageGrid from './ImageGrid'
const index = () => {
  return (
    <section className='main__section-info'>
      <div className="container">
        <div className="row">
          <div className="col-md-6">
            <h2 className='section-heading'>Why should you have a cat?</h2>
            <p>
              Having a cat around you can actually trigger the release of calming chemicals in your body which lower your stress and anxiety leves
            </p>
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
