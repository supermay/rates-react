import React, { PureComponent } from 'react';
import ClientItem from './ClientItem';

class Client extends PureComponent {
  render() {
    const { service, selectClient } = this.props
    return (
      <div className="client">
        <h1>Clients</h1>
        {this.props.clients.map((client,index)=><ClientItem key={index} index={index} {...client} selectClient={selectClient} service={service}/>)}
      </div>
    )
  }
}

export default Client
