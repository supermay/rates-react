import React, { PureComponent } from 'react';
import RatesPageTitle from './RatesPageTitle';
import RatesSection from './RatesSection';

class RatesPage extends PureComponent {
  render(){
    return(
      <div className="rates-page">
        <RatesPageTitle
          service={this.props.service}
          client={this.props.client}
        />
        <RatesSection
          rates={this.props.rates}
        />
      </div>
    )
  }
}

export default RatesPage
