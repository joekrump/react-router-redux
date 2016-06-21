import React from 'react'
import NavLink from './NavLink'
import Photo from './Photo'
// var createFragment = require('react-addons-create-fragment');

export default React.createClass({
  contextTypes: {
    router: React.PropTypes.object
  },
  render() {
    return (
      <div className="photo-grid">
        {
          this.props.photos.map((photo, i) => <Photo key={i} i={i} 
            photo={{
              ...photo,
              link: {
                url: `/photos/${photo.code}`,
                external: false
              }
            }} 
            comments={this.props.comments[photo.code]}
            increment={this.props.increment}
          />)
        }
      </div>
    )
  }
})
