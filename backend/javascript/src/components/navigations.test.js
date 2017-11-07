import React from 'react';
import { mount } from 'enzyme'
import { MemoryRouter } from 'react-router'
import Navigator from './navigations'
import Home from './Home/Home'
import About from './About/About'
import BuilderForms from './BuilderForms/BuilderForms'
import ServiceDetails from './Services/ServiceDetails/ServiceDetails'
import E404 from './404/404'

test('should render the Home component when visiting /', () => {
    const component = mount(
        <MemoryRouter 
        initialEntries={['/']}
        initialIndex={0}>
            <Navigator />
        </MemoryRouter>
    )

    expect(component.find(Home).length).toBe(1)
})

test('should render the About component when visiting /about', () => {
    const component = mount(
        <MemoryRouter 
        initialEntries={['/about']}
        initialIndex={0}>
            <Navigator />
        </MemoryRouter>
    )

    expect(component.find(About).length).toBe(1)
})

test('should render the BuilderForms component when visiting /BuilderForms', () => {
    const component = mount(
        <MemoryRouter 
        initialEntries={['/iom']}
        initialIndex={0}>
            <Navigator />
        </MemoryRouter>
    )

    expect(component.find(BuilderForms).length).toBe(1)
})

test('should render the ServiceDetails component when visiting /services/:slug', () => {
    const component = mount(
        <MemoryRouter 
        initialEntries={['/services/ice-cream-shop']}
        initialIndex={0}>
            <Navigator />
        </MemoryRouter>
    )

    expect(component.find(ServiceDetails).length).toBe(1)
})

test('should render the E404 component when visiting /404-not-found', () => {
    const component = mount(
        <MemoryRouter 
        initialEntries={['/404-not-found']}
        initialIndex={0}>
            <Navigator />
        </MemoryRouter>
    )

    expect(component.find(E404).length).toBe(1)
})
