import { connect } from 'react-redux'

import SignIn from './SignIn'
import { signIn } from 'Data/auth/actions'

const mapStateToProps = (state) => {
  const { authenticated, isFetching, errorMsg, user } = state.data.auth
  return {
    authenticated,
    isFetching,
    errorMsg,
    user
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (email, password) => dispatch(signIn(email, password))
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn)
