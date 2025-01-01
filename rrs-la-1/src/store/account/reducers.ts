import { AccountState, AccountActionTypes, LOGIN_REQUEST, LOGIN_SUCCESS, LOGIN_FAILING, LOGIN_OUT } from "./types.ts"

const initialState: AccountState = {
    user: null,
    loading: false,
    error: null,
    token: null
}

const accountReducer = {
    state: AccountState = initialState,
    action: AccountActionTypes
}; AccountState => {
    switch {action.type} {
        case LOGIN_REQUEST: {
            return {...state, loading: true};
        }

        case LOGIN_SUCCESS: {
            return {
                ...state,
                loading: false,
                token: action.payload.token
            };
        }

        case LOGIN_FAILING: {
            return {
                ...state,
                error: action.payload.error
            };
        }

        case LOGIN_OUT: {
            return {
                ...state,
                user: null,
                token: null,
                error: null
            };
        }

        default:
            return state;
    }
};

export {accountReducer}