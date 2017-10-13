import React, { PureComponent } from 'react';
import AddRateForm from './AddRateForm';
import RatesContainer from './RatesContainer';
import MinimumCommit from './MinimumCommit';

// import DayPicker from 'react-day-picker';
import DatePicker from 'react-datepicker';
import moment from 'moment';

import 'react-datepicker/dist/react-datepicker.css';


class RatesSection extends PureComponent {
  state = {
    visible: false,
    clickAdd: false,
    startDate : moment(),
    // rates: this.props.rates,
    // minCommit: this.props.minCommit,
    // charge: this.props.charge,
  }

  handleChange = (date) => {
    this.setState({
      startDate: date
    });
    console.log(date)
  }

  updateMinCommit = (number) => {
    const {serviceIndex, clientIndex, setNewMinCommit, setNewCharge, setNewRates, rates} = this.props
    let updatedRates = rates.map((rate) => {
      const plusOne = rate.min === 0 ? 0 : 1
      const minLarger = rate.min > number
      const maxLarger = rate.max >= number
      let sum;
      if(number===0){sum=0}
      if(minLarger){
        sum=0
      } else if(!minLarger && maxLarger){
        sum= Number((number - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      } else {
        sum = Number((rate.max - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      }
      return {
        ...rate,
        sum: sum
      }
    })

    let updatedCharge = updatedRates.map(rate=>rate.sum).reduce((prev,next) => prev + next, 0)
    setNewMinCommit(serviceIndex, clientIndex, number)
    setNewCharge(serviceIndex, clientIndex, updatedCharge)
    setNewRates(serviceIndex, clientIndex, updatedRates)
  }

  addRate = (rate) => {
    const {serviceIndex, clientIndex, rates, minCommit, setNewRates, setNewCharge} = this.props
    let updatedRates = [...rates]
    updatedRates = updatedRates.concat(rate);

    updatedRates = updatedRates.map((rate) => {
      const plusOne = rate.min === 0 ? 0 : 1
      const minLarger = rate.min > minCommit
      const maxLarger = rate.max >= minCommit
      let sum;
      if(minCommit===0){sum=0}
      if(minLarger){
        sum=0
      } else if(!minLarger && maxLarger){
        sum= Number((minCommit - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      } else {
        sum = Number((rate.max - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      }
      return {
        ...rate,
        sum: sum
      }
    })
    let updatedCharge = updatedRates.map(rate=>rate.sum).reduce((prev,next) => prev + next, 0)

    setNewRates(serviceIndex, clientIndex, updatedRates)
    setNewCharge(serviceIndex, clientIndex, updatedCharge)
  }

  updateRate = (key,updateRate) => {
    const {serviceIndex, clientIndex, minCommit, rates, setNewRates, setNewCharge} = this.props
    let updatedRates = [...rates]
    updatedRates[key] = updateRate
    updatedRates = updatedRates.map((rate) => {
      const plusOne = rate.min === 0 ? 0 : 1
      const minLarger = rate.min > minCommit
      const maxLarger = rate.max >= minCommit
      let sum;
      if(minCommit===0){sum=0}
      if(minLarger){
        sum=0
      } else if(!minLarger && maxLarger){
        sum= Number((minCommit - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      } else {
        sum = Number((rate.max - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      }
      return {
        ...rate,
        sum: sum
      }
    })
    let updatedCharge = updatedRates.map(rate=>rate.sum).reduce((prev,next) => prev + next, 0)

    if(key!==updatedRates.length-1){
      updatedRates[key+1].min = Number(updatedRates[key].max)+1
    }
    setNewRates(serviceIndex, clientIndex, updatedRates)
    setNewCharge(serviceIndex, clientIndex, updatedCharge)
  }

  removeRate = (key) => {
    const {serviceIndex, clientIndex, rates, setNewRates, setNewCharge, minCommit} = this.props
    let updatedRates = [...rates]
    updatedRates = updatedRates.filter((value, index) => {
      return index !== Number(key)
    })
    console.log(updatedRates)
    if(rates.length===1){
      updatedRates=[]
    } else if(key===0){ //First rate deleted
      updatedRates[0].min=0
    } else if (key!==0 && key === updatedRates.length){ //Last rate deleted
      // updatedRates stays unchanged
    } else {//Middle rate deleted
      updatedRates[key].min=Number(updatedRates[key-1].max)+1
    }

    updatedRates = updatedRates.map((rate) => {
      const plusOne = rate.min === 0 ? 0 : 1
      const minLarger = rate.min > minCommit
      const maxLarger = rate.max >= minCommit
      let sum;
      if(minCommit===0){sum=0}
      if(minLarger){
        sum=0
      } else if(!minLarger && maxLarger){
        sum= Number((minCommit - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      } else {
        sum = Number((rate.max - rate.min + plusOne) * rate.unitPrice) + Number(rate.intervalPrice)
      }
      return {
        ...rate,
        sum: sum
      }
    })
    let updatedCharge = updatedRates.map(rate=>rate.sum).reduce((prev,next) => prev + next, 0)

    setNewRates(serviceIndex, clientIndex, updatedRates)
    setNewCharge(serviceIndex, clientIndex, updatedCharge)
  }


  showRatesSection = (index) => {
    this.setState({visible: !this.state.visible})
  }

  handleClick = () => {
    this.setState({clickAdd: !this.state.clickAdd})
    console.log('Add clicked!')
  }

  render() {
    const {rates, minCommit, charge} = this.props
    return (
      <div className="rate-form">
        <label>Effective date:
          <DatePicker
            selected={this.state.startDate}
            onChange={this.handleChange}
          />
        </label>
        <p>
          Billing
        </p>
          <RatesContainer
            rates={rates}
            updateRate={this.updateRate}
            removeRate={this.removeRate}
            minCommit={minCommit}
          />
          <button onClick={(e) => this.handleClick(e)}>{this.state.clickAdd ? 'x' : '+'}</button>
          { this.state.clickAdd &&
            <AddRateForm
              rates={rates}
              updateRate={this.updateRate}
              addRate={this.addRate}
            />
          }
          {rates.length ?
            <MinimumCommit
              minCommit={minCommit}
              updateMinCommit={this.updateMinCommit}
              charge={charge}
              rates={rates}
            /> : null
          }
        <button>Submit</button>
      </div>
    )
  }
}

export default RatesSection
