/* eslint-env jest */
import React from 'react'

import { BrowserRouter as Router } from 'react-router-dom'
import { mount } from 'enzyme'

import MenuItem from './index'


describe('<MenuItem />', () => {
  const component = (
    <Router>
      <MenuItem label='Home' to='/' />
    </Router>
  )

  it('Should render', () => {
    mount(component)
  })

  it('Should have a button', () => {
    const wrapper = mount(component)
    expect(wrapper.find('button').length).toEqual(1)
  })
})
