import React, { PureComponent } from 'react';

class ClientItem extends PureComponent {
  render() {
    const { name, index, selectClient } = this.props
    return (
      <div className="client-item">
        <p onClick={() => selectClient(index)}>{name ? name : 'Global Rates'}</p>
      </div>
    )
  }
}

export default ClientItem
