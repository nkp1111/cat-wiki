import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FirstPage from './FirstPage'
import CatDetail from '../CatDetail'
import AllBreeds from '../AllBreeds'
import "./main.css"

const index = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/cat/:id' element={<CatDetail />} />
        <Route path='/allBreeds' element={<AllBreeds />} />
      </Routes>
    </main>
  )
}

export default index
