import React from "react";
import colors from "../../data/colors";
import { find } from "ramda";
import { Link } from "react-router-dom";

/*
      TODO: Utilize the withRouter Higher Order Component (HOC) to provide
      matched route parameter values.  
      withRouter will pass updated match, location, and history props 
      to the wrapped component whenever it renders.

      https://reacttraining.com/react-router/web/api/withRouter
*/

const ShowColor = ({ match, location, history }) => {
  const color = find(c => c.id === match.params.id, colors);

  return (
    <div className="vh-100">
      <h1 style={{ backgroundColor: color.value }}>{color.name}</h1>
      <Link to="/colors">Back</Link>
    </div>
  );
};

export default ShowColor;
