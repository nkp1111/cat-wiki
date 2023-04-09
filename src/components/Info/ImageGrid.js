import React from 'react'

import { images } from '../../utils'

const { image1, image2, image3 } = images
const ImageGrid = () => {
  return (
    <div className='info-grid'>
      <div className="d-flex gap-4">
        <div className="d-flex flex-column align-items-end gap-4">
          <div className='img-holder-1'>
            <img src={image2} alt="cat" />
          </div>
          <div className='img-holder-3'>
            <img src={image1} alt="cat" />
          </div>
        </div>
        <div className='img-holder-2'>
          <img src={image3} alt="cat" />
        </div>
      </div>
    </div>
  )
}

export default ImageGrid
