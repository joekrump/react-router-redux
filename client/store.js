import { createStore, compose } from 'redux';


// import the root reducer
// 
import rootReducer from './reducers/index';
import photos from '../data/photos';
import comments from '../data/comments';

const defaultState = {
  photos: photos,
  comments
};

// Create store using Redux
const store = createStore(
  rootReducer,
  defaultState
);


export default store;