import React from 'react'

const SearchForm = () => {
  return (
    <div className='main__form-breed'>
      <form className='d-flex'>
        <input type="text" placeholder='Enter your breed' />
        Search Icon
      </form>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="cat-breeds" data-bs-toggle="dropdown" aria-expanded="false">
          Breeds
        </button>
        <ul className="dropdown-menu" aria-labelledby="cat-breeds">
          {["breed1", "breed2"].map(item => (
            <li key={item} className="dropdown-item">{item}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default SearchForm
