import React from "react";
import { withRouter } from "react-router";

const TestWithRounterPage = ({ match, location, history }) => (
  <div> You are now at {location.pathname} </div>
);

export default withRouter(TestWithRounterPage);
