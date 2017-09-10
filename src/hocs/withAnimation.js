import React, { Component } from 'react'

import TransitionGroup from 'react-transition-group/TransitionGroup'
import Transition from 'react-transition-group/Transition'


const DURATION = 300

const defaultStyles = {
  transition: `transform ${DURATION}ms ease`,
  transform: 'rotateX(90deg)',
  opacity: 1
}

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1, transform: 'rotateX(0deg)' },
  exiting: { opacity: 0.5 },
  exited: { opacity: 1, transform: 'rotateX(90deg)' }
}

const RotateAndFade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={DURATION} >
    {(state) => {
      return (
        <div
          style={{
            ...defaultStyles,
            ...transitionStyles[state]
          }}
        >
          {children}
        </div>
      )
    }}
  </Transition>
)

export default (ComposedComponent) => {
  return class withAnimation extends Component {
    render () {
      const { match, ...props } = this.props
      return (
        <TransitionGroup>
          { match && <RotateAndFade children={<ComposedComponent {...props} />} /> }
        </TransitionGroup>
      )
    }
  }
}
