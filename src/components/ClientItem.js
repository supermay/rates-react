import React, { PureComponent } from 'react';
import RatesPage from './RatesPage';

class ClientItem extends PureComponent {
  state = {
    override: this.props.override
  }

  handleOverride = () => {
    this.setState({override: true})
  }

  render() {
    const { name, index, selectClient, visible, minCommit, charge } = this.props
    return (
      <div className="service-item">
        <p onClick={() => selectClient(index)}>{name ? name : 'Global Rates'}</p>
        {visible &&
          <RatesPage
            rates={this.props.rates}
            service={this.props.service}
            client={this.props.name}
            override={this.state.override}
            handleOverride={this.handleOverride}
            minCommit={minCommit}
            charge={charge}
          />}
      </div>
    )
  }
}

export default ClientItem
