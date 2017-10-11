import React, { Component } from 'react';
import Service from './components/Service'

const rates = []

const clients = [
  {name: 'client1', visible: false, rates: Object.assign({},rates)},
  {name: 'client2', visible: false, rates: Object.assign({},rates)},
  {name: 'client3', visible: false, rates: Object.assign({},rates)},
  {name: 'client4', visible: false, rates: Object.assign({},rates)},
  {name: 'client5', visible: false, rates: Object.assign({},rates)},
]

const services = [
  {name: 'A1 VM - EU West', visible: false, clients: clients.map(client => Object.assign({},client))},
  {name: 'A1 VM - EU North', visible: false, clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU North', visible: false, clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU East', visible: false, clients: clients.map(client => Object.assign({},client))}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Service
          services={services}
          clients={clients}
        />
      </div>
    );
  }
}

export default App;
