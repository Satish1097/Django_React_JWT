import { useState } from 'react'
import './App.css'
import Home from './Home'
import LoginForm from './LoginForm'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Nav from './Nav';
import PrivateRoute from './utils/PrivateRoute';
function App() {
  return (
    <>
      <Router>
        <Nav />
        <Routes>
          <Route path="/Login" element={<LoginForm />} />
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
