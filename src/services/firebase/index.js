import Firebase from 'firebase/app'
import 'firebase/auth'

import Auth from './auth'
import config from './config'

Firebase.initializeApp(config)

export const auth = new Auth(Firebase.auth())
