import React, { PureComponent } from 'react';
import Client from './Client'

class ServiceItem extends PureComponent {
  state = {
    clients: this.props.clients.concat(this.props.global)
  }

  selectClient = (index) => {
    if(this.state.clients[index].visible){
      this.setState({
        clients: this.state.clients.map((v,i) => {
          return {
            ...v, visible: false
          }
        })
      })
    } else {
      this.setState({
        clients: this.state.clients.map((v,i) => {
          return {
            ...v, visible: i === index
          }
        })
      })
    }
  }

  render() {
    const { name, visible, index, selectService } = this.props
    return (
      <div className="service-item">
        <p onClick={() => selectService(index)}>{name}</p>
        {visible &&
          <Client
            clients={this.state.clients}
            selectClient={this.selectClient}
            service={name}
          />}
      </div>
    )
  }
}

export default ServiceItem
