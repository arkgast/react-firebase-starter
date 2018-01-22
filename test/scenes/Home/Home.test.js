import React from 'react'
import { mount } from 'enzyme'

import Home from '../../../src/scenes/Home'


describe('<Home />', () => {
  it('Should render', () => {
    mount(<Home />)
  })

  it('Should have h1 tag', () => {
    const wrapper = mount(<Home />)
    expect(wrapper.find('h1').length).toEqual(1)
  })
})
