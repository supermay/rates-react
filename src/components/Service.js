import React, { PureComponent } from 'react';

class Service extends PureComponent {
  render() {
    return (
      <div className="service">
        <p>service</p>
        <ul>{this.props.services.map((service,index)=> <li key={index}>{service.name}</li>)}</ul>
      </div>
    )
  }
}

export default Service
