import React, { Component } from 'react';
import Service from './components/Service'

const clients = [
  {name: 'client1', rates: []},
  {name: 'client2', rates: []},
  {name: 'client3', rates: []},
  {name: 'client4', rates: []},
  {name: 'client5', rates: []},
]

const services = [
  {name: 'A1 VM - EU West', clients: clients.map(client => Object.assign({},client))},
  {name: 'A1 VM - EU North', clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU North', clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU East', clients: clients.map(client => Object.assign({},client))}
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
