// increment
// 
export function increment(index) {
  return {
    type: 'INCREMENT_LIKES',
    index: index
  }
}

// add comment
// 
export function addComment(photoCode, author, comment) {
  return {
    type: 'ADD_COMMENT',
    photoCode: photoCode,
    author: author,
    comment: comment
  }
}
// remove comment
// 
export function removeComment(photoCode, i){
  return {
    type: 'REMOVE_COMMENT',
    photoCode: photoCode,
    i: i
  }
}
