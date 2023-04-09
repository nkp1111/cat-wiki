import React, { useRef, useEffect } from 'react'
import { SlMagnifier, SlClose } from 'react-icons/sl'
import { Link } from 'react-router-dom'

import useGlobalContext from '../../context'
import { handleBreedDropdown } from '../../utils'
import './searchForm.css'

const SearchForm = () => {
  const { breeds } = useGlobalContext()
  const inputRef = useRef()
  const closeBtnRef = useRef()

  useEffect(() => {
    // show all breed items in the dropdown menu
    const inputBar = inputRef.current
    inputBar.addEventListener("change", (e) => handleBreedDropdown())
    inputBar.addEventListener("click", (e) => handleBreedDropdown())

    return () => {
      inputBar.removeEventListener("change", (e) => handleBreedDropdown())
      inputBar.removeEventListener("click", (e) => handleBreedDropdown())
    }
  });

  useEffect(() => {
    // hide all dropdown menus
    const closeBtn = closeBtnRef.current
    closeBtn.addEventListener("click", () => handleBreedDropdown("hide"))

    return () => {
      closeBtn.removeEventListener("click", () => handleBreedDropdown("hide"))
    }
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
          <button className='close-btn' aria-labelledby='close-button'
            ref={closeBtnRef}>
            <SlClose />
          </button>
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
