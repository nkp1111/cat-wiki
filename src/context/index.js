import React, { createContext, useContext, useEffect, useState } from 'react'

const AppContext = createContext()

const AppProvider = ({ children }) => {

  const [breeds, setBreeds] = useState([]);
  const catapiBaseUrl = "https://api.thecatapi.com/v1/"

  const fetchAllbreeds = () => {
    const breedUrl = catapiBaseUrl + "breeds"
    fetch(breedUrl).then(res => res.json()).then(data => setBreeds(data))
  }

  useEffect(() => {
    fetchAllbreeds()
  }, []);

  console.log(breeds)
  return (
    <AppContext.Provider
      value={{
        breeds
      }}
    >
      {children}
    </AppContext.Provider>
  )
}

const useGlobalContext = () => useContext(AppContext)

export { AppProvider }
export default useGlobalContext