import React from 'react'

const ShowPage = () => {
  return (
    <section className='main__section-breed'>
      <h2 className='section-heading'>Most Searched Breeds</h2>
      <div className="d-flex">
        <p>66+ Breeds For you to discover</p>
        <a href="#" className='ms-auto'>SEE MORE</a>
      </div>

      <div className="container">
        <div className="row">
          {["cat1", "cat2"].map((item, ind) => (
            <div className="col-sm-6 col-md-3" key={ind}>
              <div className="card">
                {item}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default ShowPage
