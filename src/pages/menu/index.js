import React from 'react'
import { Link } from 'react-router-dom'

const Menu = props => {
    return (
      <div>
        <h1>Five in One</h1>
        <ul>
          <li>
            <Link to="/colors">Colors</Link>
          </li>
          <li>
            <Link to="/buzzwords">BuzzWords</Link>
          </li>
          <li>
            <Link to="/starwars">Star Wars Names</Link>
          </li>
          <li>
            <Link to="/cookies">Fortune Cookies</Link>
          </li>
        </ul>
      </div>
    )
  }

export default Menu