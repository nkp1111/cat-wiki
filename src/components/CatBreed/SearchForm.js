import React from 'react'

import useGlobalContext from '../../context'

const SearchForm = () => {
  const { breeds } = useGlobalContext()

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
          {breeds.map(breed => (
            <li key={breed.id} className="dropdown-item">{breed.name}</li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default SearchForm
