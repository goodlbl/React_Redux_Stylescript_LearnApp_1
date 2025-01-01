export const LOGIN_REQUEST = 'LOGIN_REQUEST';
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
export const LOGIN_FAILING = 'LOGIN_FAILING';

export const LOGIN_OUT = 'LOGIN_OUT';

export interface AuthenticateUser {
    _id: string;
    first_name: string;
    last_name: string;
    email: string;
    avatar: string;
}

interface LoginRequest {
    type: typeof LOGIN_REQUEST;
    payload: {
        email: string;
        password: string;
    }
}

interface LoginSuccess {
    type: typeof LOGIN_SUCCESS;
    payload: {
        token: string;
    }
}

interface LoginFailing {
    type: typeof LOGIN_FAILING;
    payload: {
        error: string;
    }
}

interface LogOut {
    type: typeof LOGIN_OUT;
}

export interface AccountState {
    user: AuthenticateUser | null;
    loading: boolean;
    error: string | null;
    token: string | null;
}

export type AccountActionTypes =
    | LoginRequest
    | LoginSuccess
    | LoginFailing
    | LogOut;




