import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Layout from "../components/layout";
import { Button, Form, Header } from "semantic-ui-react";

export default function Home() {
  return (
    <div>
      <Header as="h1">Hello ! Selectionnez un mode de jeu 😊</Header>

      <Button as={Link} to="/around-the-world" content="Around the world" />
      <Button as={Link} to="/301" content="301" />
      <Button as={Link} to="/cricket" content="Cricket" />
    </div>
  );
}
