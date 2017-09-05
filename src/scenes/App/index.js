import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import Button from 'material-ui/Button'
import { Link } from 'react-router-dom'

import './theme.scss'


export default class App extends Component {
  render () {
    const { children } = this.props
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
            {this.props.routes.map((route, i) => (
              <Link key={i} to={route.pathname}>
                <Button color='contrast'>{route.text}</Button>
              </Link>
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
