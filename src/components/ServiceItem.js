import React, { PureComponent } from 'react';

class ServiceItem extends PureComponent {
  render() {
    const { name, index, visible, selectService } = this.props
    return (
      <div className={'service-item-'+ visible} >
        <p onClick={() => selectService(index)}>{name}</p>
      </div>
    )
  }
}

export default ServiceItem
