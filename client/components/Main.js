import React from 'react'
import NavLink from './NavLink';


export default React.createClass({
  render() {
    return (
      <div>
        <h1><NavLink to="/" onlyActiveOnIndex>Reduxstagram</NavLink></h1>
        <ul role="nav">
          <li><NavLink to="/" onlyActiveOnIndex>Home</NavLink></li>
          <li><NavLink to="/about">About</NavLink></li>
          <li><NavLink to="/photos">Photos</NavLink></li>
        </ul>
        {React.cloneElement(this.props.children, this.props)}
      </div>
    )
  }
})
