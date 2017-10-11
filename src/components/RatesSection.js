import React, { PureComponent } from 'react';
import AddRateForm from './AddRateForm';
import Rates from './Rates';

import DayPicker from 'react-day-picker';
import DayPickerInput from "react-day-picker/DayPickerInput";
import 'react-day-picker/lib/style.css';


class RatesContainer extends PureComponent {
  state = {
    visible: false
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
            updateRate={this.props.updateRate}
            removeRate={this.props.removeRate}
          />
          <AddRateForm
            addRate={this.props.addRate}
            rates={this.props.rates}
          />
        <button>Submit</button>
      </div>
    )
  }
}

export default RatesContainer
