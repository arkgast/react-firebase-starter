import React, { Component } from 'react'
import PropTypes from 'prop-types'

import Card, { CardMedia, CardContent } from 'material-ui/Card'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import './theme.scss'


const styles = {
  card: {
    maxWidth: 345,
    flex: 1
  },
  media: {
    height: 200,
    marginTop: 10,
    backgroundSize: 'contain',
    backgroundPosition: 'center'
  }
}

class App extends Component {
  render () {
    const classes = this.props.classes
    return (
      <div>
        <Typography type='display2' component='h1'>React Firebase Starter</Typography>
        <div className='cards-wrapper'>
          <Card className={classes.card}>
            <CardMedia
              className={classes.media}
              image='https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg'
              title='React Firebase'
            />
            <CardContent>
              <Typography type='headline'>React Firebase</Typography>
            </CardContent>
          </Card>
        </div>
      </div>
    )
  }
}

App.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(App)
