import React from 'react'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'
import { orderCatImages } from '../../utils'
import "./allBreeds.css"

const Index = () => {
  const { breeds, topCatBreedsName, catBreedImages } = useGlobalContext()
  const topBreedImage = orderCatImages(catBreedImages)

  return (
    <div className='main__breeds'>
      <h1 className='section-heading'>Top 10 most searched breeds</h1>
      <div className="d-flex flex-column py-3">
        {topCatBreedsName.map((breed, ind) => {
          return (
            <article className='d-flex' key={breed.id}>
              <div className="content order-2">
                <h2>
                  <Link to={`/cat/${breed.id}`}>{breed.rank}. {breed.name}</Link>
                </h2>
                <p>
                  {breeds.find(item => item.id === breed.id)?.description}
                </p>
              </div>
              <div className="img-holder">
                <Link to={`/cat/${breed.id}`}>
                  {topBreedImage && (
                    <img src={topBreedImage[ind]} alt={breed.name} />
                  )}
                </Link>
              </div>
            </article>
          )
        })}
      </div>
      <hr />
      <section className='main__breed-name pt-2'>
        <h2 className='section-heading'>Find More breeds...</h2>
        <div className="d-flex mt-4">
          {breeds.map(breed => {
            if (!topCatBreedsName.map(item => item.id).includes(breed.id)) {
              return <Link to={`/cat/${breed.id}`}
                className='breed-name' key={breed.id}>{breed.name}</Link>
            } else {
              return null
            }
          })}
        </div>
      </section>
    </div>
  )
}

export default Index
