// Reducer takes in two things:
// 
// 1. the action (info about what happened)
// 2. a copy of the current state
// 

// Set default value (with es6 params)
export default function photos(state = [], action){

  switch(action.type) {
    case 'INCREMENT_LIKES' :
      console.log('incrementing likes!!');
      const i = action.index
      // return an array of new posts with the changed like coutn of one of them.
      return [
        ...state.slice(0, i), // before the one we are updating
        Object.assign(state[i], {likes: state[i].likes + 1}), // change 'likes' count
        ...state.slice(i + 1), // everything after the one we are updating
      ];
    default:
      return state;
  }
}