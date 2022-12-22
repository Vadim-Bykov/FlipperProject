import {AuthActions} from './actions';
import {UPDATE_AUTH_STATE} from './actionTypes';
import {AuthState, initialState} from './state';

export const authReducer = (
  state: AuthState = initialState,
  action: AuthActions,
) => {
  switch (action.type) {
    case UPDATE_AUTH_STATE:
      return {
        ...state,
        ...action.payload,
      };

    default:
      return state;
  }
};
