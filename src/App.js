import React, { Component } from 'react';
import Service from './components/Service'
import Client from './components/Client';
import RatesPage from './components/RatesPage';

import './App.css';
// const form = [{date:, rates:[]}]

const clients = [
  {name: 'client1', rates: [], visible: false, override: false, minCommit: 0, charge: 0},
  {name: 'client2', rates: [], visible: false, override: false, minCommit: 0, charge: 0},
  {name: 'client3', rates: [], visible: false, override: false, minCommit: 0, charge: 0},
  {name: 'client4', rates: [], visible: false, override: false, minCommit: 0, charge: 0},
  {name: 'client5', rates: [], visible: false, override: false, minCommit: 0, charge: 0},
]

const globalRates = [
  {min:0, max: 25, unitPrice: 1.00, intervalPrice: 0.00, sum: 0 },
  {min:26, max: 100, unitPrice: 0.50, intervalPrice: 10.00, sum: 0 },
  {min:101, max: '∞', unitPrice: 0.25, intervalPrice: 0.00, sum: 0 },
]

const globalObject = {rates: globalRates, visible: true, minCommit: 0, charge: 0}

const services = [
  {name: 'A1 VM - EU West', visible: false, global: globalObject, clients: [globalObject].concat(clients.map(client => Object.assign({},client)))},
  {name: 'A1 VM - EU North', visible: false, global: globalObject, clients: [globalObject].concat(clients.map(client => Object.assign({},client)))},
  {name: 'C1 VM - EU North', visible: false, global: globalObject, clients: [globalObject].concat(clients.map(client => Object.assign({},client)))},
  {name: 'C1 VM - EU East', visible: false, global: globalObject, clients: [globalObject].concat(clients.map(client => Object.assign({},client)))}
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

  selectClient = (index) => {
    const visibleServiceIndex = this.state.services.findIndex(service => service.visible)
    const clients = this.state.services[visibleServiceIndex].clients
    if(clients[index].visible){
      const services = this.state.services.map((vs,is) => {
        if(is !== visibleServiceIndex) {
          return vs
        } else {
          return {...vs, clients: clients.map((vc,ic) => {
            return {
              ...vc, visible: false
            }}
          )}
        }
      })
      this.setState({
        services
      })
    } else {
      const services = this.state.services.map((vs,is) => {
        if(is !== visibleServiceIndex) {
          return vs
        } else {
          return {...vs, clients: clients.map((vc,ic) => {
            return {
              ...vc, visible: ic === index
            }}
          )}
        }
      })
      this.setState({
        services
      })
    }
  }

  handleOverride = (serviceIndex,clientIndex) => {
    const services = [...this.state.services]
    services[serviceIndex].clients[clientIndex].override = true
    this.setState({
      services
    })
  }

  setNewRates = (serviceIndex,clientIndex,rates) => {
    const services = [...this.state.services]
    services[serviceIndex].clients[clientIndex].rates = rates
    this.setState({
      services
    })
  }

  setNewMinCommit = (serviceIndex,clientIndex,minCommit) => {
    const services = [...this.state.services]
    services[serviceIndex].clients[clientIndex].minCommit = minCommit
    this.setState({
      services
    })
  }

  setNewCharge = (serviceIndex,clientIndex,charge) => {
    const services = [...this.state.services]
    services[serviceIndex].clients[clientIndex].charge = charge
    this.setState({
      services
    })
  }

  render() {
    const {services} = this.state
    const visibleService = services.find(service=>service.visible)
    const serviceIndex = services.findIndex(service=>service.visible)
    const isServiceVisible = visibleService !== undefined
    const clientIndex = isServiceVisible ? visibleService.clients.findIndex(client=>client.visible) : false
    const visibleClient = isServiceVisible ? visibleService.clients.find(client=>client.visible) : false
    console.log(services, visibleService)
    return (
      <div className="App">
        <Service
          services={services}
          selectService={this.selectService}
        />
        {visibleService && <Client
          clients={visibleService.clients}
          selectClient={this.selectClient}
        />}
        {visibleClient && <RatesPage
          service={visibleService.name}
          {...visibleClient}
          serviceIndex={serviceIndex}
          clientIndex={clientIndex}
          handleOverride={this.handleOverride}
          setNewRates={this.setNewRates}
          setNewMinCommit={this.setNewMinCommit}
          setNewCharge={this.setNewCharge}
         />}
      </div>
    );
  }
}

export default App;
