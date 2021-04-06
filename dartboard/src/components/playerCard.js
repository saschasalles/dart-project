import { React, useState } from 'react';
import { Button, Card, Image } from 'semantic-ui-react';


export const PlayerCard = (props) => {
  return (
    <div>
      <Card>
      <Card.Content>
        <Card.Header>{props.playerName}</Card.Header>
        <Card.Meta>{props.gameTurn}</Card.Meta>
        <Card.Description>
          Score : {props.score}
        </Card.Description>
      </Card.Content>
    </Card>
    </div>
  )
}


