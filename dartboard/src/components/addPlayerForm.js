import { React, useState } from "react";
import { Button, Icon, Image, Modal, Form } from "semantic-ui-react";
import axios from "axios";

const initialValues = {
  name: "",
  email: "",
};

export const AddPlayerForm = (props) => {
  const [values, setValues] = useState(initialValues);

  const handleAddPlayer = (player) => {
    console.log(player);

    axios
      .post("http://localhost:3000/players", player)
      .then((res) => {
        props.onClose()
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (evt) => {
    handleAddPlayer(values);
  };

  const resetInitialValue = () => {
    setValues({ name: "", email: "" });
  };

  return (
    <Modal
      open={props.open}
      onClose={props.onClose}
      onOpen={props.onOpen}
      trigger={<Button>Add Player</Button>}
    >
      <Modal.Content scrolling>
        <Modal.Description>
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
          </Form>
        </Modal.Description>
      </Modal.Content>
    </Modal>
  );
};
