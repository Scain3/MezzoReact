import { createStore, combineReducers, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';
import session from './session';
import trendingReducer from './trending';
import storyReducer from './story';
import commentReducer from './comments';
import searchReducer from './search';
import clapReducer from './clap'

const rootReducer = combineReducers({
  session,
  trending: trendingReducer,
  search: searchReducer,
  story: storyReducer,
  comments: commentReducer,
  claps: clapReducer,
});

let enhancer;

if (process.env.NODE_ENV === 'production') {
  enhancer = applyMiddleware(thunk);
} else {
  const logger = require('redux-logger').default;
  const composeEnhancers =
    window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
  enhancer = composeEnhancers(applyMiddleware(thunk, logger));
}

const configureStore = (preloadedState) => {
  return createStore(rootReducer, preloadedState, enhancer);
};

export default configureStore;
