import React, { PureComponent } from 'react';
import RatesPageTitle from './RatesPageTitle';
import RatesSection from './RatesSection';

class RatesPage extends PureComponent {
  render(){
    const { service, name, rates, override, minCommit, charge, handleOverride,
            serviceIndex, clientIndex,
            setNewRates, setNewMinCommit, setNewCharge
          } = this.props

    let showContent;
    if(!this.props.client || override){
      showContent = <RatesSection
        rates={rates}
        minCommit={minCommit}
        charge={charge}
        setNewRates={setNewRates}
        setNewMinCommit={setNewMinCommit}
        setNewCharge={setNewCharge}
        clientIndex={clientIndex}
        serviceIndex={serviceIndex}
       />
    } else {
      showContent = <button onClick={() => handleOverride(serviceIndex, clientIndex)}>OVERRIDE</button>
    }

    return(
      <div className="rates-page">
        <RatesPageTitle
          service={service}
          client={name}
        />
        {showContent}
      </div>
    )
  }
}
export default RatesPage
