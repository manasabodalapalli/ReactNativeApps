import { createStore, combineReducers, applyMiddleware } from 'redux';
import thunk from 'react-thunk';
import userReducer from './reducers';

const rootReducer = combineReducers({userReducer});

export default store = createStore(rootReducer,applyMiddleware(thunk));