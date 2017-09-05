import React, { Component } from 'react'

import { BrowserRouter as Router, Route } from 'react-router-dom'

import App from './scenes/App'
import About from './scenes/About'
import Home from './scenes/Home'


const routes = [
  {
    pathname: '/',
    text: 'Home'
  },
  {
    pathname: '/about',
    text: 'About'
  }
]


export default class Root extends Component {
  render () {
    return (
      <Router>
        <App routes={routes}>
          <Route
            exact
            path={routes[0].pathname}
            children={({ ...props }) => {
              return (
                <Home {...props} />
              )
            }}
          />
          <Route
            exact
            path={routes[1].pathname}
            children={({ ...props }) => {
              return (
                <About {...props} />
              )
            }}
          />
        </App>
      </Router>
    )
  }
}
