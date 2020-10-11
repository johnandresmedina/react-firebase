import { signIn } from './authService';

const initialState = {
  user: null,
  status: 'idle',
  authError: null,
};

const LOGIN_STARTED = 'LOGIN_STARTED';
const LOGIN_SUCCEEDED = 'LOGIN_SUCCEEDED';
const LOGIN_FAILED = 'LOGIN_FAILED';

const CLEAN_LOGIN = 'CLEAN_LOGIN';

const authReducer = (state, { type, payload }) => {
  switch (type) {
    case LOGIN_STARTED:
      return {
        ...state,
        status: 'pending',
      };
    case LOGIN_SUCCEEDED:
      return {
        ...state,
        user: payload,
        status: 'resolved',
      };
    case LOGIN_FAILED:
      return {
        ...state,
        status: 'rejected',
        authError: 'Login failed',
      };

    case CLEAN_LOGIN:
      return {
        ...state,
        status: 'idle',
        user: null,
        authError: null,
      };

    default:
      return state;
  }
};

const login = (email, password) => async dispatch => {
  dispatch({ type: LOGIN_STARTED });
  try {
    const user = await signIn(email, password);
    dispatch({ type: LOGIN_SUCCEEDED, payload: user });
  } catch (error) {
    dispatch({ type: LOGIN_FAILED });
  }
};

const cleanLogin = () => ({ type: CLEAN_LOGIN });

export default authReducer;
export { initialState, login, cleanLogin };
