import React from 'react'
import fortuneCookies from '../../data/cookies'
import {find} from 'ramda'
import {Link} from 'react-router-dom'

/*
      TODO: Utilize the withRouter Higher Order Component (HOC) to provide
      matched route parameter values.  
      withRouter will pass updated match, location, and history props 
      to the wrapped component whenever it renders.

      https://reacttraining.com/react-router/web/api/withRouter
*/

const ShowCookie = (props) => {

  const foundCookie = find(c => c.id === id, fortuneCookies)
    
  return (
          <div className="vh-100">
            <h1>{foundCookie.name}</h1>
            <Link to="/cookies">Back</Link>
          </div>
        )
}

export default ShowCookie