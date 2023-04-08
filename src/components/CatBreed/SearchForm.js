import React from 'react'
import { SlMagnifier } from 'react-icons/sl'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'

const SearchForm = () => {
  const { breeds } = useGlobalContext()

  return (
    <div className='main__form-breed'>
      <form className='d-flex align-items-center'>
        <input type="text" placeholder='Enter your breed' />
        <div className="icon-holder">
          <SlMagnifier />
        </div>
      </form>

      <div className="dropdown">
        <button className="btn btn-secondary dropdown-toggle" type="button" id="cat-breeds" data-bs-toggle="dropdown" aria-expanded="false">
          Breeds
        </button>
        <ul className="dropdown-menu" aria-labelledby="cat-breeds">
          {breeds.map(breed => (
            <li key={breed.id} className="dropdown-item">
              <Link to={`/${breed.id}`}>{breed.name}</Link>
            </li>
          ))}
        </ul>
      </div>

    </div>
  )
}

export default SearchForm
