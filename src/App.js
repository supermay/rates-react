import React, { Component } from 'react';
import Service from './components/Service'
import ClientContainer from './components/ClientContainer'
import RateForm from './components/RateForm'

const services = [
  {name: 'A1 VM - EU West'},
  {name: 'A1 VM - EU North'},
  {name: 'C1 VM - EU North'},
  {name: 'C1 VM - EU East'}
]

const clients = [
  {name: 'client1'},
  {name: 'client2'},
  {name: 'client3'},
  {name: 'client4'},
  {name: 'client5'},
  {name: 'client6'},
  {name: 'client7'},
  {name: 'client8'},
  {name: 'client9'}
]

class App extends Component {
  render() {
    return (
      <div className="App">
        <Service services={services} />
        <ClientContainer clients={clients} />
        <RateForm />
      </div>
    );
  }
}

export default App;
