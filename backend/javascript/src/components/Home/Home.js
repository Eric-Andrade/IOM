import React, { Component } from 'react'
import Services from '../Services/Services'

class Home extends Component {
    // state = {  }
  render () {
    var {s} = this.props
    return (
      <div>
        {s.length
        ? s.map(s => <Services {...s} key={s.slug} titleLink />)
        : <p>Awaiting services...</p> }
      </div>
    )
  }
}

export default Home
