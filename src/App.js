import React, { Component } from 'react';
import Service from './components/Service'

// const form = [{date:, rates:[]}]

const clients = [
  {name: 'client1', rates: [], visible: false, override: false},
  {name: 'client2', rates: [], visible: false, override: false},
  {name: 'client3', rates: [], visible: false, override: false},
  {name: 'client4', rates: [], visible: false, override: false},
  {name: 'client5', rates: [], visible: false, override: false},
]

const globalRates = [
  {min:0, max: 25, unitPrice: 1.00, intervalPrice: 0.00},
  {min:26, max: 100, unitPrice: 0.50, intervalPrice: 10.00},
  {min:101, max: '∞', unitPrice: 0.25, intervalPrice: 0.00},
]

const globalObject = {rates: globalRates, visible: true}

const services = [
  {name: 'A1 VM - EU West', visible: false, global: globalObject, clients: clients.map(client => Object.assign({},client))},
  {name: 'A1 VM - EU North', visible: false, global: globalObject, clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU North', visible: false, global: globalObject, clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU East', visible: false, global: globalObject, clients: clients.map(client => Object.assign({},client))}
]

class App extends Component {
  state = {
    services
  }

  selectService = (index) => {
    if(this.state.services[index].visible) {
      this.setState({
        services: this.state.services.map((v,i) => {
          return {
            ...v, visible: false
          }})
      })
    } else {
      this.setState({
        services: this.state.services.map((v,i) => {
          return {
            ...v, visible: i === index
          }})
      })
    }
  }

  render() {
    return (
      <div className="App">
        <Service
          services={this.state.services}
          selectService={this.selectService}
        />
      </div>
    );
  }
}

export default App;
