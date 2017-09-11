import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'

import MenuItem from './components/MenuItem'
import './theme.scss'


export default class App extends Component {
  render () {
    const { routes, children } = this.props
    const routeKeys = Object.keys(routes)
    return (
      <div>
        <div className='image-wrapper' />
        <AppBar position='static'>
          <Toolbar>
            <Typography
              type='title'
              color='inherit'
              style={{ flex: 1 }}
            >
              React Firebase Starter
            </Typography>
            {routeKeys.map((key, i) => (
              <MenuItem
                key={i}
                activeOnlyWhenExact={routes[key].exact}
                to={routes[key].pathname}
                label={routes[key].label}
              />
            ))}
          </Toolbar>
        </AppBar>
        <div className='pages-container'>
          {children}
        </div>
      </div>
    )
  }
}
