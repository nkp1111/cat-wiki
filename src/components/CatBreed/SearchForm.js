import React, { useRef, useEffect } from 'react'
import { SlMagnifier } from 'react-icons/sl'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'
import './searchForm.css'

const SearchForm = () => {
  const { breeds } = useGlobalContext()
  const inputRef = useRef()

  useEffect(() => {
    const breedItem = document.querySelector(".dropdown-menu")
    inputRef.current.addEventListener("change", (e) => {
      if (!breedItem.classList.contains("show")) {
        breedItem.classList.add("show")
      }
    })
    inputRef.current.addEventListener("click", (e) => {
      if (!breedItem.classList.contains("show")) {
        breedItem.classList.add("show")
      }
    })
  });

  return (
    <div className='main__form-breed'>
      <form className='d-flex align-items-center'>
        <input type="text" placeholder='Enter your breed' ref={inputRef} />
        <div className="icon-holder d-flex align-items-center justify-content-center">
          <SlMagnifier />
        </div>
      </form>

      <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="cat-breeds" data-bs-toggle="dropdown" aria-expanded="false">
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
