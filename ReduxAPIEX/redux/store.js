import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import dataReducer from './reducers';

const rootReducer = combineReducers({dataReducer});

export default store = createStore(rootReducer,applyMiddleware(thunk));