import React from 'react';
import {
  Box,
  Media,
  Content,
  Image,
  Link,
  Level,
  Title
} from 'reactbulma'
const card = (props) => {
  let url = "https://www.steemit.com" + props.article.url
  return (<div className="card" onClick={() => {
      window.location.href = url
    }}>
    <Box>
      <Media>
        <Media.Left>
          <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>

        </Media.Left>
        <Media.Content>
          <Content>

            <p>
              <strong>{props.article.author}</strong>
              <br/>
              <small>{props.article.title}</small>
            </p>
          </Content>
        </Media.Content>

      </Media>
      <Level>
        <Level.Item>
          <div>
            <small>Replies</small>
            <Title>{props.article.replies}</Title>
          </div>
        </Level.Item>
        <Level.Item>
          <div>
            <small>Active votes</small>
            <Title>{props.article.active_votes}</Title>
          </div>
        </Level.Item>

      </Level>
    </Box>
  </div>)
}

export default card;
