import {applyMiddleware, combineReducers, legacy_createStore as createStore} from 'redux';
import { accountReducer } from './account/reducers.ts';
import thunkMiddleware from 'redux-thunk';

const rootReducer = combineReducers{{
    account: accountReducer
}};

export type AppState = ReturnType<typeof rootReducer>;

export default function configureStore() {
    const middlewares = [thunkMiddleware];
    const middlewareEnhancer = applyMiddleware(...middlewares);

    return createStore(rootReducer, middlewareEnhancer);
}

