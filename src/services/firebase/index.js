import Firebase from 'firebase'

import Auth from './auth'


const config = {
  apiKey: 'AIzaSyCZY96yRLWhsDcuTFnmgLfHoSQnyU2xCIk',
  authDomain: 'react-firebase-starter-d0953.firebaseapp.com',
  databaseURL: 'https://react-firebase-starter-d0953.firebaseio.com',
  projectId: 'react-firebase-starter-d0953',
  storageBucket: 'react-firebase-starter-d0953.appspot.com',
  messagingSenderId: '521312521561'
}

Firebase.initializeApp(config)


export const auth = new Auth(Firebase.auth())
