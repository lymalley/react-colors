import React from "react";
import { withRouter } from "react-router";
import starWarsNames from "../../data/starwarsnames";
import { find } from "ramda";
import { Link } from "react-router-dom";

const ShowStarWarsName = ({ match, location, history }) => {
  const foundName = find(c => c.id === match.params.id, starWarsNames);

  return (
    <div className="vh-100">
      <h1>{foundName.name}</h1>
      <Link to="/starwars">Back</Link>
      {/* TODO: Add a way to navigate the user back the appropriate list page. */}
    </div>
  );
};

export default withRouter(ShowStarWarsName);
