import React from "react";
import { Link } from "react-router-dom";
import { map } from "ramda";
import colors from "../../data/colors";

function li(color) {
  return (
    <li key={color.id} style={{ color: color.value }}>
      <Link to={`/colors/${color.id}`}>{color.name}</Link>
    </li>
  );
}

const Colors = () => {
  return (
    <div>
      <h1>Colors</h1>
      <Link to="/">Home</Link>
      {/* TODO: Provide a link that sends the user to the home page/menu. */}
      <ul>{map(li, colors)}</ul>
    </div>
  );
};

export default Colors;
