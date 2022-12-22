import {TypedUseSelectorHook, useDispatch, useSelector} from 'react-redux';
import {applyMiddleware, combineReducers, compose, createStore} from 'redux';
import {authReducer} from './auth';

const reducers = combineReducers({
  auth: authReducer,
});

const middlewares = [];
// @ts-ignore
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

if (__DEV__) {
  const createDebugger = require('redux-flipper').default;
  middlewares.push(createDebugger());
}

export const appStore = createStore(
  reducers,
  composeEnhancers(applyMiddleware(...middlewares)),
);

type RootReducer = typeof reducers;
export type AppState = ReturnType<RootReducer>;
type AppDispatch = typeof appStore.dispatch;

export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector;
export const useAppDispatch: () => AppDispatch = useDispatch;
