import React from 'react'
import PropTypes from 'prop-types'
import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import styles from 'Styles/base'

let About = ({ classes }) => (
  <div className={classes.page}>
    <Typography type='display3'>About</Typography>
    <Typography type='subheading'>Just a simple way to start doing something amazing!</Typography>
  </div>
)

About.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(About)
