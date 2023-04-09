import React, { useRef, useEffect } from 'react'
import { SlMagnifier, SlClose } from 'react-icons/sl'
import { Link, useNavigate } from 'react-router-dom'

import useGlobalContext from '../../context'
import { handleBreedDropdown, filterDropdown } from '../../utils'
import './searchForm.css'

const SearchForm = () => {
  const { breeds } = useGlobalContext()
  const inputRef = useRef()
  const closeBtnRef = useRef()
  const detailCatPageNav = useNavigate()

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

  useEffect(() => {
    // filter breeds to get required breed
    const inputBar = inputRef.current
    inputBar.addEventListener("input", (e) => filterDropdown(inputBar.value))

    return () => {
      inputBar.removeEventListener("input", (e) => filterDropdown(inputBar.value))
    }
  })

  const navigateCatDetail = (e) => {
    // navigate to cat detail page on form submit 
    e.preventDefault()
    let breedId = filterDropdown(inputRef.current.value)
    console.log(breedId)
    if (breedId) {
      detailCatPageNav(`/${breedId}`)
    }
  }

  return (
    <div className='main__form-breed'>
      <form className='d-flex align-items-center' onSubmit={(e) => navigateCatDetail(e)}>
        <input type="text" placeholder='Enter your breed' ref={inputRef} />
        <div className="icon-holder d-flex align-items-center justify-content-center">
          <SlMagnifier />
        </div>
      </form>

      <div className="dropdown">
        <button className="btn dropdown-toggle" type="button" id="cat-breeds" data-bs-toggle="dropdown" aria-expanded="false">
          Cat Breeds
        </button>
        <ul className="dropdown-menu" aria-labelledby="cat-breeds">
          <button className='close-btn' aria-labelledby='close-button'
            ref={closeBtnRef}>
            <SlClose />
          </button>
          {breeds.map(breed => (
            <li key={breed.id} className={`dropdown-item ${breed.id}`}>
              <Link to={`/${breed.id}`}>{breed.name}</Link>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default SearchForm
