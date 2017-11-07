import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Services from './Services'

test('Services component should render as expected', () => {
const component = shallow(<Services sName='A service' />)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})

test('Services component should render as expected', () => {
    const component = shallow(<Services sName='A service' titleLink/>)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})