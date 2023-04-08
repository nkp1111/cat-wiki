import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'
import { orderCatImages } from '../../utils'

const ShowPage = () => {

  const { topCatBreedsName, catBreedImages } = useGlobalContext()
  const catImages = orderCatImages(catBreedImages)

  return (
    <section className='main__section-breed'>
      <h2 className='section-heading'>Most Searched Breeds</h2>
      <div className="d-flex">
        <p>66+ Breeds For you to discover</p>
        <a href="#" className='ms-auto d-flex align-items-center'>SEE MORE <CgArrowLongRight className='ms-2 long-arrow-icon' /></a>
      </div>

      <div className="container">
        <div className="row">
          {topCatBreedsName?.map((breed, ind) => (
            <div className="col-sm-6 col-md-3" key={breed.id}>
              <Link to={`/${breed.id}`}>
                <div className="card">
                  {catImages.length !== 0 && (
                    <div className="img-holder">
                      <img src={catImages[ind]} alt={breed.name} />
                    </div>
                  )}
                  <p>{breed.name}</p>
                </div>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowPage
