import React from "react";
import { Link } from "react-router-dom";

const Menu = props => {
  return (
    <div>
      <h1>Five in One</h1>
      <ul>
        <li>
          <Link to="/colors">Colors</Link>
        </li>
        <li>
          <Link to="/buzzwords">Buzz Words</Link>
        </li>
        <li>
          <Link to="/starwars">Star Wars Names</Link>
        </li>
        <li>
          <Link to="/cookie">Fotune Cookie</Link>
        </li>
      </ul>
    </div>
  );
};

export default Menu;
