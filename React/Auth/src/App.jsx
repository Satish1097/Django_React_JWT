import { useState } from 'react'
import './App.css'
import Home from './Home'
import Login from './Login'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import PrivateRoute from './utils/PrivateRoute';

function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Login" element={<Login />} />
          <Route
            path="/"
            element={
              <PrivateRoute>
                <Home />
              </PrivateRoute>
            }
            exact
          />
        </Routes>
      </Router>
    </>
  )
}

export default App
