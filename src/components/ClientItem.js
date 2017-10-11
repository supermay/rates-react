import React, { PureComponent } from 'react';
import RatesPage from './RatesPage';

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
