export default class Auth {
  constructor (authInstance) {
    this.auth = authInstance
  }
  signIn (email, password, cbSuccess, cbError) {
    this.auth.signInWithEmailAndPassword(email, password)
      .then(cbSuccess)
      .catch(cbError)
  }
}
