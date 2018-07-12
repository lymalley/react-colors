import React from "react";
import { map } from "ramda";
import starwarsnames from "../../data/starwarsnames";
import { Link } from "react-router-dom";

/*
TODO: Provide a link to the show page for each star wars name
*/

function li(c) {
  return (
    <li className="pa1 blue grow" key={c.id}>
      <Link to={`/starwars/${c.id}`}>{c.name}</Link>
    </li>
  );
}

const StarWars = props => {
  return (
    <div>
      <h1>Star Wars Character Names</h1>
      <Link to="/">Home</Link>
      <ul>{map(li, starwarsnames)}</ul>
    </div>
  );
};

export default StarWars;
