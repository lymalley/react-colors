import React from "react";
import { withRouter } from "react-router";
import words from "../../data/buzzwords";
import { find } from "ramda";
import { Link } from "react-router-dom";

const ShowBuzzWord = ({ match, location, history }) => {
  const foundWord = find(c => c.id === match.params.id, words);

  return (
    <div className="vh-100">
      <h1>{foundWord.name}</h1>
      <Link to="/buzzwords">Back</Link>
      {/* TODO: Add a way to naviate the user back the appropriate list page. */}
    </div>
  );
};

export default withRouter(ShowBuzzWord);
