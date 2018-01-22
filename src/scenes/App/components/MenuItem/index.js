import React from 'react'

import PropTypes from 'prop-types'
import { Route, Link } from 'react-router-dom'
import Button from 'material-ui/Button'

const MenuItem = ({ label, to, activeOnlyWhenExact }) => (
  <Route path={to} exact={activeOnlyWhenExact} children={({ match }) => (
    <Link to={to}>
      <Button color={match ? 'accent' : 'primary'}>{label}</Button>
    </Link>
  )} />
)

MenuItem.propTypes = {
  label: PropTypes.string.isRequired,
  to: PropTypes.string.isRequired,
  activeOnlyWhenExact: PropTypes.bool.isRequired
}

MenuItem.defaultProps = {
  activeOnlyWhenExact: false
}

export default MenuItem
