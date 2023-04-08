import React from 'react'
import { useParams } from 'react-router-dom'

import useGlobalContext from '../../context'
import { getCatImages } from '../../utils'


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

  console.log(catImages)

  return (
    <>
      <div className="main__detail d-flex">
        {/* front page content */}
        <div className="detail-info order-2">
          <h1 className='section-heading'>{detailInfo?.name}</h1>
          <p>{detailInfo?.description}</p>
          {detailToShow.map(item => {
            let propTerm = item.toLowerCase().replace(" ", "_")
            return (
              <p key={item}>
                <strong>{item} </strong>
                : <span>{detailInfo?.[propTerm]}</span>
              </p>
            )

          })}
        </div>
        <div>
          <img src={catImages[0]} alt="cat" />
        </div>
      </div>
      <section className='more-image'>
        <h2 className='section-heading'>Other photos</h2>
        <div className="container">
          <div className="row">
            {catImages.map((item, ind) => (
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
