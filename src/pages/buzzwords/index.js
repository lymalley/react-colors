import React from 'react'
import { map } from 'ramda'
import words from '../../data/buzzwords'
import {Link} from 'react-router-dom'

const li = bw => <li key={bw.id}><Link to={`/buzzwords/${bw.id}`}>{bw.name}</Link></li>

const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      {/* TODO: Provide a link that sends the user to the home page/menu. */}
      <ul>{map(li, words)}</ul>
    </div>
  )
}

export default Buzzwords