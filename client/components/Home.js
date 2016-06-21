import React from 'react'
import { Link } from 'react-router'

export default React.createClass({
  render() {
    return (
      <div className="container">
        <div>
          <h2>Home</h2>
          <p>
            View some <Link to="/photos">photos</Link>
          </p>
        </div>
      </div>
    )
  }
});
