import { AnyAction } from 'redux'

import { TOGGLE_DARK_MODE } from './darkmode.types';

const DARKMODE_INITIAL_STATE = {
  darkMode: false,
};

export const darkmodeReducer = (state = DARKMODE_INITIAL_STATE, action: AnyAction) => {
 const { type } = action;

 switch (type) {
   case TOGGLE_DARK_MODE:
     return { ...state, darkMode: !state.darkMode };
   default:
     return state;
 }
};
