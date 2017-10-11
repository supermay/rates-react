import React, { PureComponent } from 'react';
import ServiceItem from './ServiceItem'

class Service extends PureComponent {
  render() {
    return (
      <div className="service">
        <p>service</p>
        {this.props.services.map((service,index)=> <ServiceItem key={index} {...service} />)}
      </div>
    )
  }
}

export default Service
