import React from 'react'
import ReactDOM from 'react-dom'

import { AppContainer } from 'react-hot-loader'

import Root from './configureRouter'


console.log('index', process.env)
if (process.env.NODE_ENV === 'production') {
  const OfflinePluginRuntime = require('offline-plugin/runtime')
  OfflinePluginRuntime.install()
}

const render = Component => (
  ReactDOM.render(
    <AppContainer>
      <Component />
    </AppContainer>,
    document.getElementById('app')
  )
)

render(Root)

if (module.hot) {
  module.hot.accept('./configureRouter', () => {
    render(Root)
  })
}
