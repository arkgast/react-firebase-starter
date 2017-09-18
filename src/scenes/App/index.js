import React, { Component } from 'react'

import AppBar from 'material-ui/AppBar'
import Toolbar from 'material-ui/Toolbar'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import MenuItem from './components/MenuItem'


const styles = {
  '@global': {
    body: {
      margin: 0
    },
    a: {
      textDecoration: 'none'
    }
  },
  imageBackground: {
    backgroundImage: `url(${require('./image.jpg')})`,
    bacgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    filter: 'grayscale(100%)',
    height: '100%',
    position: 'absolute',
    width: '100%',
    zIndex: '-1'
  },
  pageContainer: {
    marginTop: '3em'
  }
}

class App extends Component {
  render () {
    const { routes, children, classes } = this.props
    const routeKeys = Object.keys(routes)
    return (
      <div>
        <div className={classes.imageBackground} />
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
                key={`menuitem-${i}`}
                activeOnlyWhenExact={routes[key].exact}
                to={routes[key].pathname}
                label={routes[key].label}
              />
            ))}
          </Toolbar>
        </AppBar>
        <div className={classes.pageContainer}>
          {children}
        </div>
      </div>
    )
  }
}


export default withStyles(styles)(App)
