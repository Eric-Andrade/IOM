import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BuilderForms from './BuilderForms'

test('BuilderForms component should render as expected', () => {
    const component = shallow(<BuilderForms />)
    const  tree = toJson(component)
    expect(tree).toMatchSnapshot()
})
