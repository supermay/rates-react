import React, { PureComponent } from 'react';

class ClientContainer extends PureComponent {
  render() {
    return (
      <div className="client">
        <p>client</p>
        <ul>{this.props.clients.map((client,index)=> <li key={index}>{client.name}</li>)}</ul>
      </div>
    )
  }
}

export default ClientContainer
