import React from "react";
import { withRouter } from "react-router";
import fortuneCookies from "../../data/cookies";
import { find } from "ramda";
import { Link } from "react-router-dom";

const ShowCookie = ({ match }) => {
  const foundCookie = find(c => c.id === match.params.id, fortuneCookies);

  return (
    <div className="vh-100">
      <h1>{foundCookie.name}</h1>
      <Link to="/cookies">Back</Link>
    </div>
  );
};

export default withRouter(ShowCookie);
