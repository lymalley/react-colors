import React from "react";
import { withRouter } from "react-router";
import words from "../../data/buzzwords";
import { find } from "ramda";
import { Link } from "react-router-dom";

const ShowBuzzWord = ({ match }) => {
  const foundWord = find(w => w.id === match.params.id, words);

  return (
    <div className="vh-100">
      <h1>{foundWord.name}</h1>
      <Link to="/buzzwords">Back</Link>
    </div>
  );
};

export default withRouter(ShowBuzzWord);
