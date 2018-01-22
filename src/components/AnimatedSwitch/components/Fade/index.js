import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 300

const defaultStyle = {
  transition: `transform ${duration}ms ease-in-out`,
  transform: 'rotateX(90deg)',
  opacity: 1
}

const transitionStyles = {
  entering: { opacity: 0.5 },
  entered: { opacity: 1, transform: 'rotateX(0deg)' },
  exiting: { opacity: 0.5 },
  exited: { opacity: 0, transform: 'rotateX(90deg)' }
}

const Fade = ({ in: inProp, children }) => (
  <Transition in={inProp} timeout={duration} unmountOnExit>
    {(state) => (
      <div style={{
        ...defaultStyle,
        ...transitionStyles[state]
      }}>
        {children}
      </div>
    )}
  </Transition>
)

export default Fade
