import React from "react";
import words from "../../data/buzzwords";
import { find } from "ramda";
import { Link } from "react-router-dom";

/*
      TODO: Utilize the withRouter Higher Order Component (HOC) to provide
      matched route parameter values.  
      withRouter will pass updated match, location, and history props 
      to the wrapped component whenever it renders.

      https://reacttraining.com/react-router/web/api/withRouter
*/

const ShowBuzzWord = ({ match, location, history }) => {
  const foundWord = find(c => c.id === match.params.id, words);

  return (
    <div className="vh-100">
      <h1>{foundWord.name}</h1>
      <Link to="/buzzwords">Back</Link>
    </div>
  );
};

export default ShowBuzzWord;
