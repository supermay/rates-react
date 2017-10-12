import React, { PureComponent } from 'react';
import RatesPage from './RatesPage';

class ClientItem extends PureComponent {
  render() {
    const { name, index, selectClient, visible } = this.props
    return (
      <div className="service-item">
        <p onClick={() => selectClient(index)}>{name ? name : 'Global Rates'}</p>
        {visible &&
          <RatesPage
            rates={this.props.rates}
            service={this.props.service}
            client={this.props.name}
            override={this.props.override}
          />}
      </div>
    )
  }
}

export default ClientItem
