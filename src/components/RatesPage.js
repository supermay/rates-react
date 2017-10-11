import React, { PureComponent } from 'react';
import RatesPageTitle from './RatesPageTitle';
import RatesSection from './RatesSection';

class RatesPage extends PureComponent {
  state = {
    override: this.props.override
  }

  handleOverride = () => {
    console.log('overriding process')
    this.setState({override: true})
    return (<RatesSection rates={this.props.rates}/>)
  }

  render(){
    let showContent;
    if(!this.props.client){
      showContent = <RatesSection rates={this.props.rates}/>
    } else {
      showContent = <button onClick={(e) => this.handleOverride(e)}>OVERRIDE</button>
    }
    
    return(
      <div className="rates-page">
        <RatesPageTitle
          service={this.props.service}
          client={this.props.client}
        />
        {showContent}
      </div>
    )
  }
}
export default RatesPage
