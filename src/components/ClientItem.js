import React, { PureComponent } from 'react';

class ClientItem extends PureComponent {
  state = {
    visible: false
  }

  handleClick = () => {
    this.setState({visible: !this.state.visible})
    console.log('clicked!')
  }


  render() {
    return (
      <div className="service-item">
        <p onClick={(e) => this.handleClick(e)}>{this.props.name}</p>
      </div>
    )
  }
}

export default ClientItem
