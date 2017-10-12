import React, { PureComponent } from 'react';
import RatesPageTitle from './RatesPageTitle';
import RatesSection from './RatesSection';

class RatesPage extends PureComponent {
  render(){
    const { service, client, handleOverride, override, minCommit, charge } = this.props

    let showContent;
    if(!this.props.client || override){
      showContent = <RatesSection rates={this.props.rates} minCommit={minCommit} charge={charge} />
    } else {
      showContent = <button onClick={(e) => handleOverride(e)}>OVERRIDE</button>
    }

    return(
      <div className="rates-page">
        <RatesPageTitle
          service={service}
          client={client}
        />
        {showContent}
      </div>
    )
  }
}
export default RatesPage
