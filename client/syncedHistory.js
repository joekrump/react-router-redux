import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory } from 'react-router';
import store from './store';

// Take browser history and use this with the state
export const syncedHistory = syncHistoryWithStore(browserHistory, store);