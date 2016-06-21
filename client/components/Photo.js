import React from 'react'
import { Link } from 'react-router'
import CSSTransitionGroup from 'react-addons-css-transition-group';

export default React.createClass({

  render() {
    const { photo, i, comments } = this.props;

    var PhotoLink = 
      photo.link.external ? 
        (<a href={this.props.photo.link.url} target="_blank">
          <img src={photo.display_src} alt="" className="grid-photo" />
        </a>)
       : (<Link to={this.props.photo.link.url}>
            <img src={photo.display_src} alt="" className="grid-photo" />
          </Link>);


    return (
      <figure className="grid-figure">
        <div className="grid-photo-wrap">
          {PhotoLink}
          <CSSTransitionGroup transitionName="like"
            transitionEnterTimeout={300}
            transitionLeaveTimeout={300}>
            <span key={photo.likes} className="likes-heart">
              {photo.likes}
            </span>
          </CSSTransitionGroup>
        </div>
        <figcaption>
          <p>{this.props.photo.caption}</p>
          <div className="control-buttons">
            <button onClick={this.props.increment.bind(null, i)} className="likes">
              &hearts; {photo.likes}
            </button>
            <Link className="button" to={`/photos/${photo.code}`}>
              <span className="comment-count">
                <span className="speech-bubble"></span>&nbsp;
                {this.props.comments ? comments.length : 0}
              </span>
            </Link>
          </div>
        </figcaption>
      </figure>
    )
  }
})
