import React, { PureComponent } from 'react';
import ClientItem from './ClientItem';

class Client extends PureComponent {
  render() {
    return (
      <div className="client-item">
        {this.props.clients.map((client,index)=><ClientItem key={index} {...client} service={this.props.service}/>)}
      </div>
    )
  }
}

export default Client
