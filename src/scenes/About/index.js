import React from 'react'

import Typography from 'material-ui/Typography'

import withAnimation from 'Hocs/withAnimation'


let About = () => (
  <div className='page'>
    <Typography type='display3'>About</Typography>
    <Typography type='subheading'>Just a simple way to start doing something amazing!</Typography>
  </div>
)


export default withAnimation(About)
