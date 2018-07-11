import React from 'react'
import { map } from 'ramda'
import cookies from '../../data/cookies'

/*
TODO: Provide a link to the show page for each fortune cookie.
*/

function li(cookie) {
  return <li key={cookie.id}>{cookie.name}</li>
}

const Cookies = props => {
  return (
    <div>
      <h1>Cookies</h1>
      <Link to="/">Home</Link>
      <ul>{map(li, cookies)}</ul>
    </div>
  )
}

export default Cookies