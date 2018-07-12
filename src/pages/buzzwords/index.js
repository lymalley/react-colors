import React from "react";
import words from "../../data/buzzwords";
import { Link } from "react-router-dom";
import { map } from "ramda";

/*
TODO: Provide a link to the show page for each buzzword.
*/
const li = bw => (
  <li key={bw.id}>
    <Link to={`/buzzwords/${bw.id}`}>{bw.name}</Link>
  </li>
);

const Buzzwords = props => {
  return (
    <div>
      <h1>Buzzwords</h1>
      <Link to="/">Home</Link>
      <ul>{map(li, words)}</ul>
    </div>
  );
};

export default Buzzwords;
