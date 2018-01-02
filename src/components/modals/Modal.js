import React from 'react';

import './Modal.css';

class Modal extends React.Component {
  render() {
    // Render nothing if the "show" prop is false
    if (!this.props.show) {
      return null;
    }

    return (<div className="modal is-active">
      <div className="modal-background" onClick={this.props.toggleisWhatIsModal}></div>
      <div className="modal-content">
        <div className="modal-card">
          <header className="modal-card-head"></header>
          <section className="modal-card-body has-text-centered">
            <h1 className="has-text-info is-size-2">CryptoReact</h1>
            <p className="has-text-grey-darker">
              Cryptocurrencies emerged in 2009 with the first decentralized cryptocurrency -
              <a className="has-text-primary" target="_blank" rel="noopener noreferrer" href="https://bitcoin.org/en/">
                Bitcoin</a>. As of today - more than 700 digital currencies exist with a total market capitalization greater than 100 billion USD.
            </p>
            <p className="has-text-grey-darker">
              <span className="has-text-info">
                <br/>CryptoReact</span>
              is a real-time dashboard that displays the top 120 cryptocurrencies based on currency price, market capitalization and overall circulating supply - obtained from the leading cryptocurrency resource
              <a className="has-text-primary" target="_blank" rel="noopener noreferrer" href="https://coinmarketcap.com/">
                CoinMarketCap</a>.
            </p>
            <h1 className="has-text-info is-size-4 top30">React</h1>
            {/* <img src={logo} className="App-logo" alt="logo"/> */}
            <p className="has-text-grey-darker">
              Built as a weekend project, this was a great play around to React and
              <a className="has-text-primary" target="_blank" rel="noopener noreferrer" href="https://bulma.io/">
                Bulma</a>. This project has been inspired by
              <a className="has-text-primary" target="_blank" rel="noopener noreferrer" href="https://www.cryptovue.com">
                CryptoVue</a>
              , basically the same project, but made in Vue.JS. You can reach me on github or reach the creator of CryptoVue on this
              <a className="has-text-primary" target="_blank" rel="noopener noreferrer" href="https://github.com/djirdehh/crypto_vue">
                github repo</a>.
            </p>
          </section>
          <footer className="modal-card-foot"></footer>
        </div>
      </div>
      <button className="modal-close is-large" onClick={this.props.toggleisWhatIsModal}></button>
    </div>);
  }
}

export default Modal;
