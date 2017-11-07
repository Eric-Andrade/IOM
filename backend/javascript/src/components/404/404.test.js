import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import E404 from './404'

test('E404 component should render as expected', () => {
    const component = shallow(<E404 />)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
