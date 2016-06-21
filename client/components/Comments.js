import React from 'react';

export default React.createClass({
  getInitialState() {
    return {postComments: []}
  },
  componentDidMount(){
    this.setState({postComments: this.props.postComments})
  },
  handleSubmit(e) {
    e.preventDefault();
    const photoCode  = this.props.photoCode;
    const author = this.refs.author.value;
    const comment = this.refs.comment.value;
    this.props.addComment(photoCode, author, comment);
    this.refs.commentForm.reset();
    this.refs.author.focus();
  },
  componentWillReceiveProps(nextProps) {
    this.setState({postComments: nextProps.postComments});
  },
  render() {
    var commentNodes = this.state.postComments.map(function(comment, i){
      return (
        <div className="comment" key={i}>
          <p>
            <strong>{comment.user}</strong>
            {comment.text}
            <button className="remove-comment" onClick={this.props.removeComment.bind(null, this.props.photoCode, i)}>&times;</button>
          </p>
        </div>
      );
    }.bind(this));

    return (
      <div className="comments">
        {commentNodes}
        <form ref="commentForm" className="comment-form" onSubmit={this.handleSubmit}>
          <input type="text" ref="author" placeholder="author" />
          <input type="text" ref="comment" placeholder="comment" />
          <input type="submit" hidden />
        </form>
      </div>
    );
  }
});