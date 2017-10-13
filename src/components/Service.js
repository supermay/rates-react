import React, { PureComponent } from 'react';
import ServiceItem from './ServiceItem'

class Service extends PureComponent {
  render() {
    const { selectService } = this.props
    return (
      <div className="service">
        <h1>Services</h1>
        {this.props.services.map((service,index)=> <ServiceItem key={index} index={index} {...service} selectService={selectService} />)}
      </div>
    )
  }
}

export default Service
