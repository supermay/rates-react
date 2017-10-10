import React, { PureComponent } from 'react';

class RateForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      max: '∞',
      unitPrice: '0.00',
      intervalPrice: '0.00'
    }
  }

  addNumber = (event) => {
    event.preventDefault();
    this.setState({max : event.target.value})
  };

  addUnitPrice = (event) => {
    event.preventDefault();
    this.setState({unitPrice : event.target.value})
  };

  addIntervalPrice = (event) => {
    event.preventDefault();
    this.setState({intervalPrice : event.target.value})
  };


  render() {
    const {max, unitPrice, intervalPrice } = this.state
    const total = Number(max * unitPrice) + Number(intervalPrice)
    const sum = ( max === '∞'? '---' : total)
    return (
      <div className="rate-form">
        <p>Here is the form:</p>
        <label>Effective date:  </label>
        <input type="text" placeholder='date'/>
        <button>Add Revision</button>
        <form className="rate-tier">
          <p>
            <input type="text" value='0'/>
            ---
            <input type="text" value={max} onChange={this.addNumber}/>
            € <input type="text" value={unitPrice} onChange={this.addUnitPrice}/>
            € <input type="text" value={intervalPrice} onChange={this.addIntervalPrice}/>
            <b>Sum: {sum}
            </b>
            <button>-</button>
            <button>+</button>
          </p>
        </form>
        <button>Submit</button>
      </div>
    )
  }
}

export default RateForm
