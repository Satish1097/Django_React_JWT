import React from 'react'
import { Link } from 'react-router-dom'
import './App.css';

const Nav = () => {
  return (
    <>
        <div className="nav">
            <ul>
            <Link to="/Login">Login</Link>
            <Link to="/Home">Home</Link>
            </ul>
        </div>
    </>
  )
}

export default Nav