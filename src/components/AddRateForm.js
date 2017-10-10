import React, { PureComponent } from 'react';

class AddRateForm extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      max: '∞',
      unitPrice: '0.00',
      intervalPrice: '0.00'
    }
  }

  createRate(event){
    event.preventDefault();
    const rate = {
      max: this.max.value,
      unitPrice: this.unitPrice.value,
      intervalPrice: this.intervalPrice.value
    }
    console.log(rate);
    this.props.addRate(rate)
  }

  render() {
    // const {max, unitPrice, intervalPrice } = this.state
    // const total = Number(max * unitPrice) + Number(intervalPrice)
    // const sum = ( max === '∞'? '---' : total)
    return (
      <form className="rate-create" onSubmit={(e) => this.createRate(e)}>
        <p>
          <input type="text" defaultValue='0' />
          ---
          <input type="text" defaultValue='∞' ref={(input) => this.max = input}/>
          € <input type="text" defaultValue='0.00' ref={(input) => this.unitPrice = input}/>
          € <input type="text" defaultValue='0.00' ref={(input) => this.intervalPrice = input}/>
          <b>Sum: ---</b>
          <button className='submit'>✅</button>
        </p>
      </form>
    )
  }
}

export default AddRateForm
