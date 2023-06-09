import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'
import { orderCatImages } from '../../utils'
import Spinner from '../Spinner'
import "./showPage.css"

const ShowPage = () => {

  const { topCatBreedsName, catBreedImages } = useGlobalContext()
  const catImages = orderCatImages(catBreedImages)

  return (
    <section className='main__section-breed'>
      <h2 className='section-heading'>Most Searched Breeds</h2>
      <div className="d-flex heading-div">
        <p>66+ Breeds For you to discover</p>
        <Link to="/allBreeds"
          className='all-breed-link ms-auto d-flex align-items-center'>
          SEE MORE
          <CgArrowLongRight className='ms-2 long-arrow-icon' />
        </Link>
      </div>

      <div className="container">
        <div className="row">
          {topCatBreedsName?.slice(0, 4).map((breed, ind) => (
            <div className="col-sm-6 col-md-3" key={breed.id}>
              <Link to={`/cat/${breed.id}`}>
                <div className="card">
                  {catImages.length !== 0
                    ? catImages[ind].length > 4
                      ? (
                        <figure className={`${ind === 0 ? "card-back" : ""}`}>
                          <img src={catImages[ind]}
                            alt={breed.name} />
                          <figcaption>{breed.name}</figcaption>
                        </figure>
                      ) : <Spinner message="Problem loading image..." />
                    : <Spinner message="Images are stuck please refresh..." />}
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
