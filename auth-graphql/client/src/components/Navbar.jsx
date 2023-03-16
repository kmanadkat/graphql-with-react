import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <nav className="py-4 bg-gray-800 mb-12 text-white">
      <div className="w-3/4 mx-auto flex">
        <h1 className="brand font-semibold">
          <Link to="/">Auth GraphQL</Link>
        </h1>
        <ul className="ml-auto flex gap-12">
          <li>
            <NavLink to="/sign-up">Sign Up</NavLink>
          </li>
          <li>
            <NavLink to="/sign-in">Sign In</NavLink>
          </li>
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
