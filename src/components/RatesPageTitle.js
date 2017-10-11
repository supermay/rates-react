import React, { PureComponent } from 'react';

class RatesPageTitle extends PureComponent {
  render(){
    return(
      <div className="rates-page-title">
        <p>{this.props.service}</p>
        <p>{this.props.client ? this.props.client : 'Global Rates'}</p>
      </div>
    )
  }
}

export default RatesPageTitle
