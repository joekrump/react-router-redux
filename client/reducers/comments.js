
function postComments(state = [], action){

  switch(action.type) {
    case 'ADD_COMMENT':
      return [...state, {
        user: action.author,
        text: action.comment
      }]
    case 'REMOVE_COMMENT':
      // return everything except the current comment;
      return [
        ...state.slice(0, action.i),
        ...state.slice(action.i + 1)
      ];
    default:
      break;
  }
  return state;
}

export default function comments(state = [], action){
  
  if(action.photoCode !== undefined){
    return {
      ...state,
      [action.photoCode]: postComments(state[action.photoCode], action)
    }
  }
  return state;
}
