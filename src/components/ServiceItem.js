import React, { PureComponent } from 'react';

class ServiceItem extends PureComponent {
  render() {
    const { name, index, selectService } = this.props
    return (
      <div className="service-item">
        <p onClick={() => selectService(index)}>{name}</p>
      </div>
    )
  }
}

export default ServiceItem
