import { push } from 'react-router-redux'

import { auth as Auth } from '../../services/firebase'
import {
  SIGN_IN_INIT,
  SIGN_IN_SUCCESS, SIGN_IN_ERROR
} from './actionTypes'


const signInInit = () => {
  return {
    type: SIGN_IN_INIT
  }
}

const signInSuccess = (user) => {
  return {
    payload: user,
    type: SIGN_IN_SUCCESS
  }
}

const signInError = (error) => {
  return {
    error,
    type: SIGN_IN_ERROR
  }
}

export const signIn = (email, password) => {
  return dispatch => {
    dispatch(signInInit())
    Auth.signIn(email, password, (user) => {
      dispatch(signInSuccess(user))
      dispatch(push('/'))
    }, (error) => {
      dispatch(signInError(error))
    })
  }
}
