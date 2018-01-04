import React, {Component} from 'react';
import logo from '../logo.svg'
import Modal from 'react-responsive-modal'
import {
  Box,
  Media,
  Content,
  Image,
  Link,
  Level,
  Title,
  Container
} from 'reactbulma'

class header extends Component {
  constructor(props) {

    super(props)
    this.state = {
      open: false
    }
  }

  onOpenModal = () => {
    this.setState({open: true});
  };

  onCloseModal = () => {
    this.setState({open: false});
  };
  render() {
    return (<div className="center">
      <Level>
        <Level.Left>
          <img src={logo} className="App-logo" alt="Logo"/>
          <Title is='1'>
            <p className="white">SteemGrow</p>
          </Title>
        </Level.Left>

        <Level.Right>
          <a className="button is-dark" onClick={this.onOpenModal}>
            What's this?
          </a>
          <a className="is-size-3" target="_blank" href="https://github.com/xunga/CryptoReact-" rel="noopener noreferrer">
            <i className="icon-github-circled" aria-label="Github"/>
          </a>
          <Modal open={this.state.open} onClose={this.onCloseModal} little="little">
            <div className="centered">
              <Title is='1' className="inline">
                <img src={logo} className="App-logo mod" alt="Logo"/>
                <div className="padding">SteemGrow</div>
                <img src={logo} className="App-logo mod" alt="Logo"/>
              </Title>
              <p>
                Everybody want to grow their profile on Steemit but not everyone of us have the help they need.
              </p>
              <p className="littleMargin">
                SteemGrow is there for it, it helps low reputation authors to grow their profile.
              </p>
              <button className="button is-dark" onClick={() => {
                  window.location.href = 'https://github.com/DoodlePain/SteemGrow'
                }}>
                <p>
                  View it on GitHub
                </p>
              </button>
            </div>
          </Modal>

        </Level.Right>
      </Level>
    </div>)
  }
}

export default header;
