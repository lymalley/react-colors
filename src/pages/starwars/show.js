import React from "react";
import { withRouter } from "react-router";
import starWarsNames from "../../data/starwarsnames";
import { find } from "ramda";
import { Link } from "react-router-dom";

/*
      TODO: Utilize the withRouter Higher Order Component (HOC) to provide
      matched route parameter values.  
      withRouter will pass updated match, location, and history props 
      to the wrapped component whenever it renders.

      https://reacttraining.com/react-router/web/api/withRouter
*/

const ShowStarWarsName = ({ match, location, history }) => {
  const foundName = find(c => c.id === match.params.id, starWarsNames);

  return (
    <div className="vh-100">
      <h1>{foundName.name}</h1>
      <Link to="/starwars">Back</Link>
    </div>
  );
};

export default ShowStarWarsName;
