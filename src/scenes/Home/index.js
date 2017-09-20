import React from 'react'
import PropTypes from 'prop-types'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import Styles from 'Styles/base'


const styles = {
  page: {
    ...Styles.page
  },
  img: {
    cursor: 'pointer',
    filter: 'grayscale(50%) opacity(80%)',
    margin: {
      bottom: '0.5em',
      top: '1em'
    },
    transition: '0.75s ease',
    '&:hover': {
      filter: 'grayscale(0) opacity(100%)',
      transform: 'rotate3d(0, 1, 2, 720deg)'
    }
  }
}

let Home = ({ classes }) => (
  <div className={classes.page}>
    <Typography type='display3'>React &amp; Firebase</Typography>
    <Typography type='subheading'>Both are amazing but together are ... just like a dream</Typography>
    <img
      width='300'
      height='300'
      alt='React Firebase'
      src='https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg'
      className={classes.img}
    />
  </div>
)

Home.propTypes = {
  classes: PropTypes.object.isRequired
}


export default withStyles(styles)(Home)
