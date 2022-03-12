import { combineReducers, createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import jobReducer from './jobReducer';

const rootReducer = combineReducers({
  jobs: jobReducer
});

const store = createStore(rootReducer, {}, applyMiddleware(thunk));

export default store;
