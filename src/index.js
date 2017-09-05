import React from 'react'
import ReactDOM from 'react-dom'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import { AppContainer } from 'react-hot-loader'

import Root from './routes'


OfflinePluginRuntime.install()

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
  module.hot.accept('./routes', () => {
    render(Root)
  })
}
