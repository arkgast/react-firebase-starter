import React, { Component } from 'react'

export default (importComponent) => {
  return class AsyncComponent extends Component {
    constructor (props) {
      super(props)

      this.state = {
        component: null
      }
    }
    async componentDidMount () {
      try {
        const { default: component } = await importComponent()
        this.setState({ component })
      } catch (e) {
        this.setState({
          component: <h3> Error! </h3>
        })
        console.log('Error on loading asyncComponent: ', e)
      }
    }
    render () {
      const C = this.state.component

      return C ? <C {...this.props} /> : <h3> Loading... </h3>
    }
  }
}
