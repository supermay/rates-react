import React, { Component } from 'react';
import Service from './components/Service'

const rates = []

const form = []

const clients = [
  {name: 'client1', visible: false, form: Object.assign({},form)},
  {name: 'client2', visible: false, form: Object.assign({},form)},
  {name: 'client3', visible: false, form: Object.assign({},form)},
  {name: 'client4', visible: false, form: Object.assign({},form)},
  {name: 'client5', visible: false, form: Object.assign({},form)},
]

const services = [
  {name: 'A1 VM - EU West', visible: false, clients: clients.map(client => Object.assign({},client))},
  {name: 'A1 VM - EU North', visible: false, clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU North', visible: false, clients: clients.map(client => Object.assign({},client))},
  {name: 'C1 VM - EU East', visible: false, clients: clients.map(client => Object.assign({},client))}
]


class App extends Component {
  state = {
    rates: [],
  }

  addRate = (rate) => {
    const rates = [...this.state.rates]
    rates.push(rate);
    this.setState({rates});
  }

  updateRate = (key,updateRate) => {
    const rates = [...this.state.rates]
    rates[key] = updateRate
    this.setState({rates})
  }

  removeRate = (key) => {
    let rates = [...this.state.rates]
    rates = rates.filter((value, index) => index !== Number(key))
    console.log(key);
    console.log(rates);
    this.setState({rates});
  }

  render() {
    return (
      <div className="App">
        <Service
          services={services}
          clients={clients}
          rates={this.state.rates}
          addRate={this.addRate}
          updateRate={this.updateRate}
          removeRate={this.removeRate}
        />
      </div>
    );
  }
}

export default App;
