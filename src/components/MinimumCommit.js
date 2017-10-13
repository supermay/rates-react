import React, { PureComponent } from 'react';

class MinimumCommit extends PureComponent {

  handleEvent = (e) => {
    this.props.updateMinCommit(e.target.value)
  }

  render(){
    return (
      <div className="minimum-commit">
        {/* <input type="checkbox"/> */}
        Minimum Commit
        <input
          type="text"
          value={this.props.minCommit}
          placeholder="add a number"
          onChange={(e) => this.handleEvent(e)}
        />
        ---------->>
        {this.props.charge}
      </div>
    )
  }
}

export default MinimumCommit
