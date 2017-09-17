import React from 'react'

import Typography from 'material-ui/Typography'
import { withStyles } from 'material-ui/styles'

import withAnimation from 'Hocs/withAnimation'
import styles from 'Styles/base'


let About = ({ classes }) => (
  <div className={classes.page}>
    <Typography type='display3'>About</Typography>
    <Typography type='subheading'>Just a simple way to start doing something amazing!</Typography>
  </div>
)


export default withAnimation(withStyles(styles)(About))
