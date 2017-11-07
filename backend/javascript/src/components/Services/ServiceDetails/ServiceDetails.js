import React, {Component} from 'react'
import Services from '../Services'

class ServiceDetails extends Component {
    // state = {  }
  render () {
    var s = this.props
    return (
      <div>
        <Services {...s.s} />
      </div>
    )
  }
}

export default ServiceDetails
