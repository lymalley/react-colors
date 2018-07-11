import { map } from 'ramda'
import colors from '../../data/colors'


/*
TODO: Provide a link to the show page for each color.
*/

function li(color) {
  return (
    <li key={color.id} style={{ color: color.value }}>
      {color.name}
    </li>
  )
}

const Colors = () => {
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/">Home</Link>
      <ul>{map(li, colors)}</ul>
    </div>
  )
}

export default Colors