import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

import App from '../../../src/scenes/App'


describe('<App />', () => {
  const routes = {
    Home: {
      pathname: '/',
      label: 'Home',
      exact: true,
      component: () => {}
    }
  }
  const component = (
    <Router>
      <App routes={routes}>
        <div>
          <h1>React Firebase Starter</h1>
        </div>
      </App>
    </Router>
  )

  it('Should render', () => {
    mount(component)
  })

  it('Should have h1 tag', () => {
    const wrapper = mount(component)
    expect(wrapper.find('h1').length).toEqual(1)
  })
})
