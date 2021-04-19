import { React } from 'react';
import { Card } from 'semantic-ui-react';

export const PlayerCard = (props) => {
  return (
    <Card color={props.color}>
      <Card.Content>
        <Card.Header>{props.playerName}</Card.Header>
        <Card.Meta>{props.playerTurn}</Card.Meta>
        <Card.Description>
          Score : {props.score}
        </Card.Description>
        <Card.Description>
          Coups restant : {props.remainingShot}
        </Card.Description>
      </Card.Content>
    </Card>
  )
}


