import React, { Component } from 'react';
import Service from './components/Service'

const clients = [
  {name: 'client1', rates: [], override: false},
  {name: 'client2', rates: [], override: false},
  {name: 'client3', rates: [], override: false},
  {name: 'client4', rates: [], override: false},
  {name: 'client5', rates: [], override: false},
]

const global = [
  {min:0, max: 25, unitPrice: 1.00, intervalPrice: 0.00},
  {min:26, max: 100, unitPrice: 0.50, intervalPrice: 10.00},
  {min:101, max: '∞', unitPrice: 0.25, intervalPrice: 0.00},
]

const services = [
  {name: 'A1 VM - EU West', global: global.map(rate => Object.assign({},rate)), clients: clients.map(client => Object.assign({},client))},
  {name: 'A1 VM - EU North', global: global.map(rate => Object.assign({},rate)), clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU North', global: global.map(rate => Object.assign({},rate)), clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU East',  global: global.map(rate => Object.assign({},rate)), clients: clients.map(client => Object.assign({},client))}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Service
          services={services}
        />
      </div>
    );
  }
}

export default App;
