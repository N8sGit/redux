import {createStore, applyMiddleware, compose, combineReducers} from 'redux'
import lyricsReducer from './reducers/lyrics-reducer';
import playerReducer from './reducers/player-reducer'
import {createLogger} from 'redux-logger';
import thunkMiddleware from 'redux-thunk'

let middleware = [];



const logger = createLogger()

middleware.push(logger)
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;


const store = createStore(
  combineReducers({
 lyrics: lyricsReducer,
 player: playerReducer
}), /* preloadedState, */
   composeEnhancers(applyMiddleware(...middleware, thunkMiddleware))
);

export default store;
