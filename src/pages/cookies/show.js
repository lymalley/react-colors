import React from 'react'
import { withRouter } from 'react-router'
import fortuneCookies from '../../data/cookies'

const ShowCookie = (props) => {
  
    /*
    TODO: This "show" page is meant to display a single fortune cookie.  
          Find the fortune cookie in the array of fortune cookies
          A matched path/route parameter can help you identify 
          the cookie to display.
    */
  
  
  return (
          <div className="vh-100">
            <h1>{foundCookie.name}</h1>
            <Link to="/cookies">Back</Link>
          </div>
        )
}

export default withRouter(ShowCookie)