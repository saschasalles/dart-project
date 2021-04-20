import { React } from 'react';
import { Card } from 'semantic-ui-react';

export const PlayerCard = (props) => {
  return (
    <Card color={props.color}>
      <Card.Content>
        <Card.Header>{props.playerName}</Card.Header>
      { props.inGame ? (
        <>
        <Card.Description>
          Score : {props.score}
        </Card.Description>
        <Card.Description>
          Coups restant : {props.remainingShot}
        </Card.Description> 
        </>)
      : (
        <>
      <Card.Description>
        Rank : {props.rank}
      </Card.Description>
      </>
      )}
      </Card.Content>
    </Card>
  )
}


