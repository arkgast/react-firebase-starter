import React from 'react'
import { mount } from 'enzyme'
import About from './index'


describe('<About />', () => {
  it('Should render', () => {
    mount(<About />)
  })

  it('Should have h1 tag', () => {
    const wrapper = mount(<About />)
    expect(wrapper.find('h1').length).toEqual(1)
  })
})
