import React, { PureComponent } from 'react';
import AddRateForm from './AddRateForm';

class RatesForm extends PureComponent {
  state = {
    rates: {}
  }

  addRate = (rate) => {
    const rates = {...this.state.rates}
    const timestamp = Date.now();
    rates[`rate-${timestamp}`] = rate;
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
          <AddRateForm
            addRate={this.addRate}
            rates={this.state.rates}
          />
        <button>Submit</button>
      </div>
    )
  }
}

export default RatesForm
