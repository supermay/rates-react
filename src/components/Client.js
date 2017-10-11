import React, { PureComponent } from 'react';
import RatesSection from './RatesSection';

class ClientContainer extends PureComponent {

  showRatesSection = (index) => {
  }

  render() {
    return (
      <div className="client">
        <p>client</p>
        {/* <ul>{this.props.clients.map((client,index)=> <li key={index} onClick={this.showRatesSection(index)}>{client.name}</li>)}</ul>
        {this.state.visible &&
          <RatesSection
            rates={this.state.rates}
            addRate={this.props.addRate}
            updateRate={this.props.updateRate}
            removeRate={this.props.removeRate}
          />} */}
      </div>
    )
  }
}

export default ClientContainer
