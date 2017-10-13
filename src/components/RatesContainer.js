import React, { PureComponent } from 'react';

class RatesContainer extends PureComponent {
  handleEvent = (e, index) => {
    const rate = this.props.rates[index];
    const updatedRate = {
      ...rate,
      [e.target.name]: e.target.value
    }
    this.props.updateRate(index,updatedRate)
  }

  renderRate = (index) => {
    const { min, max, unitPrice, intervalPrice, sum } = this.props.rates[index]
    console.log(index)
    return (
      <div className="rate-edit" key={index}>
        {min}  ---
        <input type="text" value={max} name='max' placeholder='max'
          onChange={(e) => this.handleEvent(e, index)}/>
        € <input type="text" value={unitPrice} name='unitPrice' placeholder='unitPrice'
          onChange={(e) => this.handleEvent(e, index)}/>
        € <input type="text" value={intervalPrice} name='intervalPrice' placeholder='intervalPrice'
          onChange={(e) => this.handleEvent(e, index)}/>
          sum: {sum===0 ? '---' : sum}
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

export default RatesContainer
