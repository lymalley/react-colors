import words from '../../data/buzzwords'


/*
TODO: Provide a link to the show page for each buzzword.
*/

const li = bw => <li key={bw.id}>{bw.name}</li>

const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <Link to="/">Home</Link>
      <ul>{map(li, words)}</ul>
    </div>
  )
}

export default Buzzwords