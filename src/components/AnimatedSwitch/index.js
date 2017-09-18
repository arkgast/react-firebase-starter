import React from 'react'

import { Switch } from 'react-router-dom'

import Fade from './components/Fade'


export default class AnimatedSwitch extends Switch {
  render () {
    return (
      <Fade {...this.props}>
        {super.render()}
      </Fade>
    )
  }
}
