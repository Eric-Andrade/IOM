import React, { Component } from 'react'
import { Route, Switch } from 'react-router-dom'
import services from '../utils/services.json'
import About from './About/About'
import BuilderForms from './BuilderForms/BuilderForms'
import Home from './Home/Home'
import ServiceDetails from './Services/ServiceDetails/ServiceDetails'
import E404 from './404/404'

class Navigator extends Component {
  render () {
    return (
      <Switch>
        <Route exact path='/' component={() => <Home s={services.services} />} />
        <Route path='/about' component={About} />
        <Route path='/iom' component={BuilderForms} />
        <Route path='/services/:slug' component={props => {
          const s = services.services.filter(s => props.match.params.slug === s.slug)
          return <ServiceDetails s={s[0]} />
        }} />
        <Route component={E404} />
      </Switch>
    )
  }
}

export default Navigator
