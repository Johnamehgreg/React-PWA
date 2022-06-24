import React from 'react'
import { BrowserRouter, Link, Routes, Route } from 'react-router-dom'
import About from '../pages/about'
import Home from '../pages/home'
import User from '../pages/user'

function RoutePage() {
  return (
    <BrowserRouter>

      <div>
        <nav className="navbar dark navbar-expand-lg navbar-light bg-light">
          <div className="container-fluid">

            <div className="navbar-nav row me-auto mb-2 mb-lg-0">
                  <Link to='/' className="nav-link active"  >
                    Home
                  </Link>
                  <Link to='/user' className="nav-link active"  >
                    user
                  </Link>
                  <Link to='/about' className="nav-link active"  >
                    About
                  </Link>

                  



              </div>
          </div>
        </nav>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/user' element={<User />} />
          <Route path='/about' element={<About />} />
        </Routes>
      </div>
    </BrowserRouter>

  )
}

export default RoutePage