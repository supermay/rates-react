import React, { PureComponent } from 'react';
import RatesSection from './RatesSection';

class ClientItem extends PureComponent {
  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({visible: !this.state.visible})
    console.log('clicked!')
  }


  render() {
    return (
      <div className="service-item">
        <p onClick={(e) => this.handleClick(e)}>{this.props.name}</p>
        {this.state.visible &&
          <RatesSection
            rates={this.props.rates}
            service={this.props.service}
            client={this.props.name}
          />}
      </div>
    )
  }
}

export default ClientItem
