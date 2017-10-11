import React, { PureComponent } from 'react';
import Client from './Client'
import RatesPage from './RatesPage'

class ServiceItem extends PureComponent {
  render() {
    const { name, clients, visible, index, selectService } = this.props
    return (
      <div className="service-item">
        <p onClick={() => selectService(index)}>{name}</p>
        {visible && <RatesPage rates={this.props.global} service={name}/> }
        {visible && <Client clients={clients} service={name}/>}
      </div>
    )
  }
}

export default ServiceItem
