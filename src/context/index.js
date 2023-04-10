import React, { createContext, useContext, useEffect, useState } from 'react'

import { getCatImages, topBreedsName } from '../utils'

const AppContext = createContext()

const catapiBaseUrl = "https://api.thecatapi.com/v1/"

const AppProvider = ({ children }) => {

  const [breeds, setBreeds] = useState([]);
  const [topCatBreedsName, setTopCatBreedsName] = useState([]);
  const [catBreedImages, setCatBreedImages] = useState([]);

  const fetchAllbreeds = () => {
    // get all breeds 
    const breedUrl = catapiBaseUrl + "breeds"
    fetch(breedUrl)
      .then(res => res.json())
      .then(data => setBreeds(data))
      .catch(err => {
        console.log("error while fetching breeds")
        console.log(err)
      })
  }

  useEffect(() => {
    fetchAllbreeds()
    setTopCatBreedsName(topBreedsName)
  }, []);

  useEffect(() => {
    let images = []
    topBreedsName.map(breed => {
      getCatImages(breed.id).then(res => {
        images.push(res)
      })
    })
    setCatBreedImages(images)
  }, [topBreedsName]);

  // console.log(catBreedImages)
  return (
    <AppContext.Provider
      value={{
        breeds,
        topCatBreedsName,
        catBreedImages,
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext