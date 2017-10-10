import React, { PureComponent } from 'react';

class Rates extends PureComponent {
  handleEvent = (e, index) => {
    const rate = this.props.rates[index];
    const updatedRate = {
      ...rate,
      [e.target.name]: e.target.value
    }
    this.props.updateRate(index,updatedRate)
  }

  renderRate = (index) => {
    const rate = this.props.rates[index];
    return (
      <div className="rate-edit" key={index}>
        {rate.min}  ---
        <input type="text" value={rate.max} name='max' placeholder='max'
          onChange={(e) => this.handleEvent(e, index)}/>
        € <input type="text" value={rate.unitPrice} name='unitPrice' placeholder='unitPrice'
          onChange={(e) => this.handleEvent(e, index)}/>
        € <input type="text" value={rate.intervalPrice} name='intervalPrice' placeholder='intervalPrice'
          onChange={(e) => this.handleEvent(e, index)}/>
        <button onClick={() => this.props.removeRate(index)}>-</button>
      </div>
    )
  }

  render() {
    return (
      <div className="rates">
        {this.props.rates.map((value,index) => this.renderRate(index))}
      </div>
    )
  }
}

export default Rates
