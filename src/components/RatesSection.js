import React, { PureComponent } from 'react';
import AddRateForm from './AddRateForm';
import RatesContainer from './RatesContainer';
import MinimumCommit from './MinimumCommit';

// import DayPicker from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';


class RatesSection extends PureComponent {
  state = {
    visible: false,
    rates: this.props.rates,
    clickAdd: false,
    minCommit: this.props.minCommit
  }

  updateMinCommit = (number) => {
    this.setState({
      minCommit: number
    })
  }

  addRate = (rate) => {
    const rates = [...this.state.rates]
    rates.push(rate);
    this.setState({rates});
  }

  updateRate = (key,updateRate) => {
    const rates = [...this.state.rates]
    rates[key] = updateRate
    if(key!==rates.length-1){
      rates[key+1].min = Number(rates[key].max)+1
    }
    this.setState({rates})
  }


  removeRate = (key) => {
    let rates = [...this.state.rates]
    rates = rates.filter((value, index) => {
      return index !== Number(key)
    })
    console.log(rates)
    if(key===0 && rates.length > 1){rates[0].min=0}
    if(key!==0 && key > rates.length){rates[key].min=Number(rates[key-1].max)+1}
    this.setState({rates});
  }


  showRatesSection = (index) => {
    this.setState({visible: !this.state.visible})
  }

  handleClick = () => {
    this.setState({clickAdd: !this.state.clickAdd})
    console.log('Add clicked!')
  }

  render() {
    return (
      <div className="rate-form">
        <p>Here is the form:</p>
        <label>Effective date:  </label>
        <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />
        <button onClick={this.pickDay}>Add Revision</button>
        { this.state.visible && <DayPickerInput placeholder="DD/MM/YYYY" format="DD/MM/YYYY" />}
        <p>
          Billing
        </p>
          <RatesContainer
            rates={this.state.rates}
            updateRate={this.updateRate}
            removeRate={this.removeRate}
            minCommit={this.state.minCommit}
          />
          <button onClick={(e) => this.handleClick(e)}>{this.state.clickAdd ? 'x' : '+'}</button>
          { this.state.clickAdd &&
          <AddRateForm
            rates={this.state.rates}
            updateRate={this.updateRate}
            addRate={this.addRate}
          />}
          <MinimumCommit
            minCommit={this.state.minCommit}
            updateMinCommit={this.updateMinCommit}
           />
        <button>Submit</button>
      </div>
    )
  }
}

export default RatesSection
