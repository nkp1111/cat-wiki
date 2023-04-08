import React from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'

import FirstPage from './FirstPage'
import CatDetail from '../CatDetail.js'
import "./main.css"

const index = () => {
  return (
    <main className='main'>
      <Router>
        <Routes>
          <Route path='/' element={<FirstPage />} />
          <Route path='/:id' element={<CatDetail />} />
        </Routes>
      </Router>
    </main>
  )
}

export default index
