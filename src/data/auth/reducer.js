import {
  SIGN_IN_INIT,
  SIGN_IN_SUCCESS, SIGN_IN_ERROR
} from './actionTypes'


const initialState = {
  authenticated: false,
  isFetching: false,
  user: {
    displayName: null,
    email: null,
    uid: null
  },
  errorMsg: null
}

export const auth = (state = initialState, action) => {
  switch (action.type) {
    case SIGN_IN_INIT:
      return {...state, isFetching: true}
    case SIGN_IN_SUCCESS:
      return {
        ...state,
        authenticated: true,
        isFetching: false,
        user: {
          displayName: action.payload.displayName,
          email: action.payload.email,
          uid: action.payload.uid
        }
      }
    case SIGN_IN_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMsg: action.error.message
      }
    default:
      return state
  }
}
