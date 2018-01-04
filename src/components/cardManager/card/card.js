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
  let title = props.article.title
  let url = "https://www.steemit.com" + props.article.url
  if (title.length > 30) {
    title = props.article.title.substring(0, 30) + '...'
  }
  return (<div className="card" onClick={() => {
      window.location.href = url
    }}>
    <Box>
      <Media>
        <Media.Left>
          <img className="thumbnail" src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/> {/* <Image is='64x64' src="http://bulma.io/images/placeholders/128x128.png" alt="Image"/>
          </div> */
          }

        </Media.Left>
        <Media.Content>
          <Content>

            <p className="padding2">
              <div className="bold">
                <Title is='5'>
                  <strong>{props.article.author.toUpperCase()}</strong>
                </Title>
              </div>
              <small>{title}</small>
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
