import {
  Container,
  Header,
  Menu,
  Segment,
} from "semantic-ui-react";
import { Link } from "react-router-dom";

export default function Layout({ children }) {
  return (
    <div>
      <Menu fixed="top" inverted>
        <Container>
          <Menu.Item header>
            <Header as="h1" inverted>
              Dart Game
            </Header>
          </Menu.Item>

          <Menu.Item as={Link} to="/">
            Home
          </Menu.Item>
        </Container>
      </Menu>

      <Container fluid style={{ marginTop: "7em" }}>
        {children}
      </Container>

      <Segment
        inverted
        vertical
        style={{ margin: "5em 0em 0em", padding: "5em 0em" }}
      >
        <Container textAlign="center">
          <h2> Made with ❤️ by Sascha Sallès and Théo Delas</h2>
          ©2001-2021 copyright us. All right reserved lol.
        </Container>
      </Segment>
    </div>
  );
}
