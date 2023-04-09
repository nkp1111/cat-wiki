import React from 'react'
import { CgArrowLongRight } from 'react-icons/cg'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'
import { orderCatImages } from '../../utils'
import "./showPage.css"

const ShowPage = () => {

  const { topCatBreedsName, catBreedImages } = useGlobalContext()
  const catImages = orderCatImages(catBreedImages)

  return (
    <section className='main__section-breed'>
      <h2 className='section-heading'>Most Searched Breeds</h2>
      <div className="d-flex heading-div">
        <p>66+ Breeds For you to discover</p>
        <a href="#" className='ms-auto d-flex align-items-center'>SEE MORE
          <CgArrowLongRight className='ms-2 long-arrow-icon' />
        </a>
      </div>

      <div className="container">
        <div className="row">
          {topCatBreedsName?.slice(0, 4).map((breed, ind) => (
            <div className="col-sm-6 col-md-3" key={breed.id}>
              <Link to={`/${breed.id}`}>
                <div className="card">
                  {catImages.length !== 0 && (
                    <figure className={`${ind === 0 ? "card-back" : ""}`}>
                      <img src={catImages[ind]}
                        alt={breed.name} />
                      <figcaption>{breed.name}</figcaption>
                    </figure>
                  )}
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
