import { useState, useEffect, React } from "react";
import { Button, Form, List, Segment, Message } from "semantic-ui-react";



const initialValues = {
  name: "",
  email: "",
};

export function PlayerForm(props) {
  const [values, setValues] = useState(initialValues);
  const [players, setPlayers] = useState([]);

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleAddPlayer = (player) => {
    const newPlayers = [...players];
    newPlayers.push(player);
    setPlayers(newPlayers);
    resetInitialValue();
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

  return (
    <div>
      <Segment>
        <List selection>
          {players.length == 0 && (
            <Message>
              <p>Veuillez ajouter au moins 2 joueurs </p>
            </Message>
          )}
          {players.map((name, index) => (
            <List.Item verticalAlign="bottom">
              <List.Content key={index} floated="right">
                <Button
                  key={index}
                  color="red"
                  circular
                  icon="trash alternate"
                  verticalAlign="middle"
                  onClick={(e, index) => handleDelete()}
                ></Button>
              </List.Content>
              <List.Content>
                Joueur {index + 1} : {name}
              </List.Content>
            </List.Item>
          ))}
        </List>
      </Segment>

      <Form onSubmit={handleSubmit}>
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
      </Form>


    </div>
  );
}
