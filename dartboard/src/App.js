import "./App.css";
import { DartBoard } from "./components/dartboard";
import { Container, Header, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Layout from "./components/layout";
import { Game } from "./pages/game";

function App() {
  return (
    <div className="App">
      <Router>
        <Layout>
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route path="/around-the-world">
              <Game title="Around the Word" />
            </Route>
            <Route path="/301">
              <Game title="301" />
            </Route>
            <Route path="/cricket">
              <Game title="Cricket" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
