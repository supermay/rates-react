import React, { PureComponent } from 'react';
import RatesPageTitle from './RatesPageTitle';
import RatesSection from './RatesSection';

class RatesPage extends PureComponent {
  render(){
    // name is the name of the client, globalRates doesn't have a name attribute
    const { service, name, rates, override, minCommit, charge,
            handleOverride, removeOverride,
            serviceIndex, clientIndex,
            setNewRates, setNewMinCommit, setNewCharge
          } = this.props

    let showContent;
    if(!this.props.name || override){
      showContent =
      <div>
        {this.props.name && <button onClick={() => removeOverride(serviceIndex, clientIndex)}>Remove Override</button>}
        <RatesSection
          rates={rates}
          minCommit={minCommit}
          charge={charge}
          setNewRates={setNewRates}
          setNewMinCommit={setNewMinCommit}
          setNewCharge={setNewCharge}
          clientIndex={clientIndex}
          serviceIndex={serviceIndex}
        />
      </div>
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
