import React from 'react';
import Photo from './Photo';
import Comments from './Comments';

export default React.createClass({

  render() {
    // get the index of the photo that the details are to be displayed for.
    const i = this.props.photos.findIndex((photos) => photos.code === this.props.params.photoCode);
    const photo = this.props.photos[i];
    const postComments = this.props.comments[this.props.params.photoCode] || [];

    return (
      <div className="single-photo">
        <Photo i={i} photo={{...photo, link: {url: photo.display_src, external: true}}} comments={this.props.comments[photo.code]} increment={this.props.increment}/>
        <Comments postComments={postComments} photoCode={this.props.params.photoCode} addComment={this.props.addComment} removeComment={this.props.removeComment}/>
      </div>
    )
  }
})
