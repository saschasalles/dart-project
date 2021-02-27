import React from 'react';
import { Button, Form } from 'semantic-ui-react';

const PlayerForm = () => (
  <Form>
    <Form.Field>
      <label>First Name</label>
      <input placeholder='Name' />
    </Form.Field>
    <Form.Field>
      <label>Email</label>
      <input type="email" placeholder='Email' />
    </Form.Field>
    <Button type='submit'>Add Player</Button>
  </Form>
)

export default PlayerForm;