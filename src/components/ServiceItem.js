import React, { PureComponent } from 'react';
import Client from './Client'

class ServiceItem extends PureComponent {
  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({visible: !this.state.visible})
    console.log('clicked!')
  }


  render() {
    const { name, clients } = this.props
    return (
      <div className="service-item">
        <p onClick={(e) => this.handleClick(e)}>{name}</p>
        {this.state.visible && <Client clients={clients}/> }
      </div>
    )
  }
}

export default ServiceItem
