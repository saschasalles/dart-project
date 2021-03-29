import { useState, useEffect, React } from "react";
import {
  Button,
  Form,
  List,
  Dimmer,
  Loader,
  Segment,
  Message,
} from "semantic-ui-react";

import axios from "axios";

const initialValues = {
  name: "",
  email: "",
};

export function PlayerForm(props) {
  const [values, setValues] = useState(initialValues);
  const [players, setPlayers] = useState([]);
  const [dbPlayers, setDbPlayers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    evt.preventDefault();
    handleAddPlayer(values.name);
  };

  const resetInitialValue = () => {
    setValues({ name: "", email: "" });
  };

  const handleDelete = (evt, index) => {
    const newPlayers = [...players];

    newPlayers.splice(index, 1);

    setPlayers(newPlayers);
  };

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios("http://localhost:3000/players");
      let playersObj = [...dbPlayers];
      result.data.data.map((player) => {
        playersObj.push(player);
      });
      setDbPlayers(playersObj);
    };

    fetchData();
  }, []);

  const handleAddPlayer = (player) => {
    console.log(player);
    const newPlayers = [...players];
    newPlayers.push(player);
    setPlayers(newPlayers);
  }

  
  const checkId = (playerId) => {
    let res = false;
    players.map(player => {
      if(player.id == playerId) {
        res = true;
      }
    })
    return res;
  }

  const list = () => {
      return (
        <List divided verticalAlign='middle'>
          {dbPlayers.map(player => (
            <List.Item>
              <List.Content floated='right'>
                <Button disabled={checkId(player.id)} color="green" onClick={() => handleAddPlayer(player)}>Add</Button>                 
              </List.Content>
              <List.Content>{player.name}</List.Content>
            </List.Item>
            ))
          }
        </List>
      );
    
  };
  

  if (dbPlayers.length > 0) {
    return (
      <div>
        <Segment>
          <List selection>
            {players.length == 0 && (
              <Message>
                <p>Veuillez ajouter au moins 2 joueurs </p>
              </Message>
            )}

            {players.map((player, index) => (
              <List.Item verticalAlign="bottom">
                <List.Content key={player.id} floated="right">
                  <Button
                    key={player.id}
                    color="red"
                    circular
                    icon="trash alternate"
                    verticalAlign="middle"
                    onClick={(e, index) => handleDelete()}
                  ></Button>
                </List.Content>
                <List.Content>
                  Joueur {index + 1} : {player.name}
                </List.Content>
              </List.Item>
              )
            )}
          </List>
        </Segment>

        <Segment>
          {list()}
        </Segment>

        {/* <Form onSubmit={handleSubmit}>
          <Form.Field>
            <label>Nom</label>
            <input
              required
              placeholder="Nom"
              value={values.name}
              name="name"
              onChange={handleInputChange}
            />
          </Form.Field>
          <Form.Field>
            <label>Email</label>
            <input
              required
              type="email"
              placeholder="Email"
              value={values.email}
              name="email"
              onChange={handleInputChange}
            />
          </Form.Field>
          <Button type="submit">Ajouter un joueur</Button>
          <Button color="purple" icon="game" content="Jouer" />
        </Form> */}
      </div>
    );
  } else {
    return (
      <Segment>
        <Dimmer active inverted>
          <Loader inverted content="Chargement" />
        </Dimmer>
      </Segment>
    );
  }
}
