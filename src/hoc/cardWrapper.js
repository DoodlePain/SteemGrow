import React from 'react'

class CardWrapper extends React.Component {
  render() {
    return (<div className="container">
      <div className="inner-container">
        <div className="card inactive-1"></div>
        <div className="card inactive-2"></div>
        <div className="card">
          {this.props.children}
          <div className="progress-container">
            <div className="step"></div>
          </div>
        </div>
      </div>
    </div>)
  }
}

export default CardWrapper;
