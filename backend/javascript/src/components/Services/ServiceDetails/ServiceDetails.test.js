import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import ServiceDetails from './ServiceDetails'

test('ServiceDetails component should render as expected', () => {
const component = shallow(<ServiceDetails />)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
