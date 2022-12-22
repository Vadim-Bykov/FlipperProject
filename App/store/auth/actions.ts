import {UPDATE_AUTH_STATE} from './actionTypes';
import {AuthState} from './state';

export type AuthPayload = Partial<AuthState>;

interface UpdateAuthState {
  type: typeof UPDATE_AUTH_STATE;
  payload: AuthPayload;
}

type UpdateAuthDataAction = (data: AuthPayload) => UpdateAuthState;

export const updateAuthData: UpdateAuthDataAction = data => ({
  type: UPDATE_AUTH_STATE,
  payload: data,
});

export type AuthActions = UpdateAuthState;
