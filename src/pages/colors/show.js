import React from "react";
import { withRouter } from "react-router";
import colors from "../../data/colors";
import { find } from "ramda";
import { Link } from "react-router-dom";

const ShowColor = ({ match, location, history }) => {
  const color = find(c => c.id === match.params.id, colors);

  return (
    <div className="vh-100">
      <h1 style={{ backgroundColor: color.value }}>{color.name}</h1>
      {/* TODO: Add a way to naviate the user back the appropriate list page. */}
      <Link to="/colors">Back</Link>
    </div>
  );
};

export default withRouter(ShowColor);
