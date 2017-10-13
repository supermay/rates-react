import React, { PureComponent } from 'react';

class RatesPageTitle extends PureComponent {
  render(){
    return(
      <div className="rates-page-title">
        <h2>{this.props.service}</h2>
        <h3>{this.props.client ? this.props.client : 'Global Rates'}</h3>
      </div>
    )
  }
}

export default RatesPageTitle
