import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Button1 from './Button1'

test('Button1 component should render as expected', () => {
    const component = shallow(<Button1 />)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
