import React from 'react'
import { useParams } from 'react-router-dom'

import useGlobalContext from '../../context'
import { getCatImages } from '../../utils'
import RatingPlaceholder from './RatingPlaceholder'
import "./catDetail.css"

const catImages = []
const detailToShow = ["Temperament", "Origin", "Life Span", "Adaptability", "Affection level", "Child Friendly", "Grooming", "Intelligence", "Health issues", "Social needs", "Stranger friendly"]

const Index = () => {
  const { id } = useParams()
  const { breeds } = useGlobalContext()

  // cat details 
  const detailInfo = breeds.filter(breed => breed.id === id)[0]
  // cat images 

  getCatImages(id, 10).then(res => {
    if (res.length > 0) {
      res.map(item => {
        if (catImages.indexOf(item.url) === -1) {
          catImages.push(item.url)
        }
      })
    }
  })

  return (
    <>
      <div className="main__detail d-flex">
        {/* front page content */}
        <div className="detail-info order-2">
          {/* cat breed info  */}
          <h1 className='section-heading'>{detailInfo?.name}</h1>
          <p>{detailInfo?.description}</p>
          {detailToShow.map(item => {
            let propTerm = item.toLowerCase().replace(" ", "_")
            let propValue = detailInfo?.[propTerm]
            if (!Number.isInteger(propValue)) {
              // cat detail info 
              return (
                <p key={item} className='d-flex align-items-start'>
                  <strong>{item} </strong>
                  : <span className='ms-2'>{propValue}</span>
                </p>
              )
            }
            else {
              // cat detail stat
              return (
                <p key={item} className='d-flex align-items-center row'>
                  <strong className="col-3">{item} </strong>
                  <RatingPlaceholder n={propValue} />
                </p>
              )
            }
          })}
        </div>
        {/* cat main image  */}
        <div className='detail-img-holder'>
          <img src={catImages[0]} alt="cat" />
        </div>
      </div>
      {/* cat more images  */}
      <section className='more-image'>
        <h2 className='section-heading'>Other photos</h2>
        <div className="container">
          <div className="row">
            {catImages?.slice(1, 9).map((item, ind) => (
              <div className="col-md-3 col-sm-6" key={ind}>
                <img src={item} alt={detailInfo?.name} />
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}

export default Index
