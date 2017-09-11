import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import createHistory from 'history/createBrowserHistory'
import { ConnectedRouter } from 'react-router-redux'

import getStore from './configureStore'
import App from './scenes/App'
import About from './scenes/About'
import Home from './scenes/Home'
import { SignIn } from './scenes/Sign'


const history = createHistory()
const store = getStore(history)
const routes = {
  Home: {
    pathname: '/',
    label: 'Home',
    exact: true
  },
  About: {
    pathname: '/about',
    label: 'About'
  },
  SignIn: {
    pathname: '/signin',
    label: 'Sign in'
  }
}


export default class Root extends Component {
  render () {
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App routes={routes}>
            <Route
              exact
              path={routes.Home.pathname}
              children={({ ...props }) => (<Home {...props} />)}
            />
            <Route
              exact
              path={routes.About.pathname}
              children={({ ...props }) => (<About {...props} />)}
            />
            <Route
              exact
              path={routes.SignIn.pathname}
              children={({ ...props }) => (<SignIn {...props} />)}
            />
          </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}
