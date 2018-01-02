import React, {Component} from 'react';
import './App.css';
import steem from 'steem';
import CardManager from './components/cardManager/cardManager';
import Card from './components/cardManager/card/card';
import api from './components/utilities/api'
import 'reactbulma'
import Header from './components/Header'

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      result: [],
      done: 0
    }
  }
  cardManagerHandler = () => {}

  shouldComponentUpdate(nextProps, nextState) {
    if (nextState.done === 1) {
      return false
    }
    return true
  }

  fetchData = (topic, limit) => {
    let data = [];
    let i = 0;
    steem.api.getState('/created/fun', (err, result) => {
      const ris = result.content;
      let xd = [];

      Object.keys(ris).map((res) => {
        if (i !== limit) {
          let weight = api.getInfo(ris[res].author).then((result) => {
            let asd = result[0].voting_power
            xd = [
              ...xd,
              asd
            ]
          })
          xd.sort()

          let activeLength = ris[res].active_votes.length
          this.setState({
            result: [
              ...this.state.result, {
                'id': ris[res].id,
                author: ris[res].author,
                body: ris[res].body,
                title: ris[res].title,
                url: ris[res].url,
                active_votes: ris[res].active_votes,
                replies: ris[res].replies.length,
                active_votes: ris[res].net_votes,
                reward: ris[res].author_rewards
              }
            ]
          })

        } else {
          this.setState({done: 1})

        }
        i++
      })
    })
  }

  render() {
    let lastIndex = 0
    const cards = this.fetchData('fun', 18)
    let single = [];
    let card = this.state.result;
    card.map((article, index) => {
      single = [
        <Card className="card" key={index} article={article}/>,
        ...single
      ]

    })

    return (<div className="App">
      <Header/> {single}
    </div>);
  }
}

export default App;
