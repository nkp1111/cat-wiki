import React from 'react'
import { BrowserRouter as Router, } from 'react-router-dom'

import { Header, Main, Footer } from './components'

const App = () => {
  return (
    <div>
      <Router>
        <Header />
        <Main />
        <Footer />
      </Router>
    </div>
  )
}

export default App

