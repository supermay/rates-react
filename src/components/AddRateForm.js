import React, { PureComponent } from 'react';

class AddRateForm extends PureComponent {

  createRate(event){
    event.preventDefault();
    const { rates } = this.props;
    const isFirst = rates.length === 0
    const rate = {
      min: isFirst ? 0 : (Number(rates[rates.length-1].max)+1),
      max: this.max.value==='' ? '∞' : this.max.value,
      unitPrice: this.unitPrice.value,
      intervalPrice: this.intervalPrice.value,
      createdAt: Date.now()
    }
    this.props.addRate(rate)
    this.rateForm.reset()
  }

  render() {
    const { rates } = this.props;
    const isFirst = rates.length === 0
    let first = isFirst ? 0 : (Number(rates[rates.length-1].max)+1)
    if(!isFirst && rates[rates.length-1].max==='∞'){first=rates[rates.length-1].min}
    // const {max, unitPrice, intervalPrice } = this.state
    // const total = Number(max * unitPrice) + Number(intervalPrice)
    // const sum = ( max === '∞'? '---' : total)
    return (
      <form ref={(input) => this.rateForm = input} className="rate-create" onSubmit={(e) => this.createRate(e)}>
        <p>
          {first} ---
          <input type="text" defaultValue='∞' ref={(input) => this.max = input}/>
          € <input type="text" defaultValue='0.00' ref={(input) => this.unitPrice = input}/>
          € <input type="text" defaultValue='0.00' ref={(input) => this.intervalPrice = input}/>
          <button className='submit'>ok</button>
          <b> ---</b>
        </p>
      </form>
    )
  }
}

export default AddRateForm
