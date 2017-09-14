import React from 'react'

import Typography from 'material-ui/Typography'

import withAnimation from 'Hocs/withAnimation'


let Home = () => (
  <div className='page'>
    <Typography type='display3'>React &amp; Firebase</Typography>
    <Typography type='subheading'>Both are amazing but together are ... just like a dream</Typography>
    <img
      width='300'
      height='300'
      src='https://cdn.worldvectorlogo.com/logos/react-native-firebase-1.svg'
    />
  </div>
)


export default withAnimation(Home)
