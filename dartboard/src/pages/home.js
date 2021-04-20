import { React, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button, Header, Container, Card } from "semantic-ui-react";
import { useLocation, useHistory } from "react-router-dom";
import axios from "axios";

export default function Home() {
  const [games, setGames] = useState([])
  let history = useHistory();

  useEffect(() => {
    axios.get(`http://localhost:3000/games`)
    .then(res => {
      setGames(res.data.data)
    })
    .catch(error => console.log(error));
  }, []);

  const handleClick = (game) => {
    history.push(`/games/${game.id}`)
    
  }

  return (
    <Container textAlign='center'>
      <Header as="h1">Hello ! Selectionnez un mode de jeu 😊</Header>

      <Button as={Link} to="/around-the-world" content="Around the world"/>
      <Button as={Link} to="/301" content="301" />
      <Button as={Link} to="/cricket" content="Cricket" />
      <Card.Group style={{marginTop: "10"}} centered>
      {
        games.map(game => {
          const path = `/game/${game.id}`
          return (
            game.status === 'started' && (
              <Card>  
                <Card.Content>
                  <Card.Header>{game.name}</Card.Header>
                </Card.Content>
                <Card.Content extra>
                    <Button basic color='green' onClick={() => handleClick(game)} >
                      Continuer
                    </Button>
                </Card.Content>
              </Card>
            )
          )
        })
      }

    </Card.Group>
    </Container>
  );
}
