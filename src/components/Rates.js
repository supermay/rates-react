import React, { PureComponent } from 'react';

class Rates extends PureComponent {
  handleEvent = (e,key) => {
    const rate = this.props.rates[key];
    const updatedRate = {
      ...rate,
      [e.target.name]: e.target.value
    }
    this.props.updateRate(key,updatedRate)
  }

  renderRate = (key) => {
    const rate = this.props.rates[key];
    return (
      <div className="rate-edit" key={key}>
        {rate.min}  --- 
        <input type="text" value={rate.max} name='max' placeholder='max'
          onChange={(e) => this.handleEvent(e,key)}/>
        <input type="text" value={rate.unitPrice} name='unitPrice' placeholder='unitPrice'
          onChange={(e) => this.handleEvent(e,key)}/>
        <input type="text" value={rate.intervalPrice} name='intervalPrice' placeholder='intervalPrice'
          onChange={(e) => this.handleEvent(e,key)}/>
        <button onClick={() => this.props.removeRate(key)}>-</button>
      </div>
    )
  }

  render() {
    return (
      <div className="rates">
        {Object.keys(this.props.rates).map(this.renderRate)}
      </div>
    )
  }
}

export default Rates
