import { combineReducers } from 'redux';
import itemsReducer from './itemsReducer';
import modalItemReducer from './modalItemReducer';

const rootReducer = combineReducers({ items: itemsReducer, modalItem: modalItemReducer });

export default rootReducer;
