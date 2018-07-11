import React from 'react'
import { map } from 'ramda'
import cookies from '../../data/cookies'
import {Link} from 'react-router-dom'

function li(cookie) {
  return <li key={cookie.id}><Link to={`/cookies/${cookie.id}`}>{cookie.name}</Link></li>
}

const Cookies = props => {
  return (
    <div>
      <h1>Cookies</h1>
      {/* TODO: Provide a link that sends the user to the home page/menu. */}
      <ul>{map(li, cookies)}</ul>
    </div>
  )
}

export default Cookies