import React from 'react'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import Home from './Home'
import Services from '../Services/Services'

test('Home component should render as expected', () => {
    const services = [{
        "sName": "Ice-cream shop",
        "slug": "ice-cream-shop",
        "sImage": "ice-cream-shop.jpg",
        "sInfo": "We sale the best cultural ice-cream"
    }]
    const component = shallow(<Home s={services} />)
        const  tree = toJson(component)
        expect(component.find(Services).length).toBe(1)
        expect(tree).toMatchSnapshot()
})

test('Home component should render as expected', () => {
    const services = [{
        "sName": "Ice-cream shop",
        "slug": "ice-cream-shop",
        "sImage": "ice-cream-shop.jpg",
        "sInfo": "We sale the best cultural ice-cream"
    },
    {
        "sName": "Ice-cream shop",
        "slug": "ice-cream-shop",
        "sImage": "ice-cream-shop.jpg",
        "sInfo": "We sale the best cultural ice-cream"
    }]
    const component = shallow(<Home s={services} />)
        const  tree = toJson(component)
        expect(component.find(Services).length).toBe(2)
        expect(tree).toMatchSnapshot()
})

test('Home component should render as expected', () => {
    const services = []
    const component = shallow(<Home s={[]} />)
        const  tree = toJson(component)
        expect(component.find(Services).length).toBe(0)
        expect(tree).toMatchSnapshot()
})
