import React, { PureComponent } from 'react';
import AddRateForm from './AddRateForm';
import Rates from './Rates';

import DayPicker from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';


class RatesSection extends PureComponent {
  state = {
    visible: false
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


  showRatesSection = (index) => {
    this.setState({visible: !this.state.visible})
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
          <Rates
            rates={this.state.rates}
            updateRate={this.updateRate}
            removeRate={this.removeRate}
          />
          <AddRateForm
            addRate={this.addRate}
            rates={this.rates}
          />
        <button>Submit</button>
      </div>
    )
  }
}

export default RatesSection
