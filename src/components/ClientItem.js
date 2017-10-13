import React, { PureComponent } from 'react';

class ClientItem extends PureComponent {
  render() {
    const { name, index, visible, selectClient } = this.props
    return (
      <div className={'client-item-'+ visible}>
        <p onClick={() => selectClient(index)}>{name ? name : 'Global Rates'}</p>
      </div>
    )
  }
}

export default ClientItem
