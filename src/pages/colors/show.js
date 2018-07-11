import React from 'react'
import { withRouter } from 'react-router'
import colors from '../../data/colors'

const ShowColor = ({ location, history }) => {

  /*
    TODO: This "show" page is meant to display a single color.  
          Find the buzzword in the array of buzzwords
          A matched path/route parameter can help you identify 
          the color to display.
  */

  return (
          <div className="vh-100">
            <h1 style={{ backgroundColor: color.value }}>{color.name}</h1>
            <Link to="/colors">Back</Link>
          </div>
        )
}

export default withRouter(ShowColor)