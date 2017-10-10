import React, { PureComponent } from 'react';
import AddRateForm from './AddRateForm';
import Rates from './Rates';

class RatesContainer extends PureComponent {
  state = {
    rates: []
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
      <div className="rate-form">
        <p>Here is the form:</p>
        <label>Effective date:  </label>
        <input type="text" placeholder='date'/>
        <button>Add Revision</button>
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
            rates={this.state.rates}
          />
        <button>Submit</button>
      </div>
    )
  }
}

export default RatesContainer
