import React from 'react'
import { Routes, Route } from 'react-router-dom'

import FirstPage from './FirstPage'
import CatDetail from '../CatDetail.js'
import "./main.css"

const index = () => {
  return (
    <main className='main'>
      <Routes>
        <Route path='/' element={<FirstPage />} />
        <Route path='/:id' element={<CatDetail />} />
      </Routes>
    </main>
  )
}

export default index
