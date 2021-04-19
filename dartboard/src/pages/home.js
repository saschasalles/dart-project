import React from "react";
import { Link } from "react-router-dom";
import { Button, Header, Container } from "semantic-ui-react";


export default function Home() {
  return (
    <Container textAlign='center'>
      <Header as="h1">Hello ! Selectionnez un mode de jeu 😊</Header>

      <Button as={Link} to="/around-the-world" content="Around the world"/>
      <Button as={Link} to="/301" content="301" />
      <Button as={Link} to="/cricket" content="Cricket" />

    </Container>
  );
}
