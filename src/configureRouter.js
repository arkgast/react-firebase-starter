import React, { Component } from 'react'

import { Provider } from 'react-redux'
import { Route } from 'react-router-dom'
import { ConnectedRouter } from 'react-router-redux'

import asyncComponent from './hocs/asyncComponent.js'
import store, { history } from './configureStore'
import App from './scenes/App'


const AsyncHome = asyncComponent(() => import('./scenes/Home'))
const AsyncAbout = asyncComponent(() => import('./scenes/About'))
const AsyncSignIn = asyncComponent(() => import('./scenes/Sign/scenes/SignIn'))

const routes = {
  Home: {
    pathname: '/',
    label: 'Home',
    exact: true,
    component: AsyncHome
  },
  About: {
    pathname: '/about',
    label: 'About',
    component: AsyncAbout
  },
  SignIn: {
    pathname: '/signin',
    label: 'Sign in',
    component: AsyncSignIn
  }
}


export default class Root extends Component {
  render () {
    const routeKeys = Object.keys(routes)
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          <App routes={routes}>
            {routeKeys.map((key, i) => (
              <Route
                key={`route-${i}`}
                exact={routes[key].exact}
                path={routes[key].pathname}
                children={({ ...props }) => {
                  const Component = routes[key].component
                  return <Component {...props} />
                }}
              />
            ))}
          </App>
        </ConnectedRouter>
      </Provider>
    )
  }
}
