import { combineReducers } from 'redux';
import { darkmodeReducer } from './darkmode/darkmode.reducer';

const rootReducer = combineReducers({
 darkMode: darkmodeReducer
});
export default rootReducer;
