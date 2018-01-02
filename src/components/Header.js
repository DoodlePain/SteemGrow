import React from 'react'
import logo from '../logo.svg'
import Modal from './modals/Modal'
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

const header = () => {
  return (<div className="center">
    <Level>
      <Level.Left>
        <img src={logo} className="App-logo" alt="Logo"/>
        <Title is='1'>
          <p className="white">SteemGrow</p>
        </Title>
      </Level.Left>

      <Level.Right>
        <a className="button is-dark">
          What's this?
        </a>
        <a className="is-size-3" target="_blank" href="https://github.com/xunga/CryptoReact-" rel="noopener noreferrer">
          <i className="icon-github-circled" aria-label="Github"/>
        </a>
      </Level.Right>
    </Level>
  </div>)
}

export default header;
