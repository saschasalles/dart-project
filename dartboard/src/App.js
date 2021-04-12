import "./App.css";
import { Container, Header, Segment } from "semantic-ui-react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Home from "./pages/home";
import Game from "./pages/game";
import Layout from "./components/layout";
import { GameConfig } from "./components/gameConfig";

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
              <GameConfig title="Around the Word" />
            </Route>
            <Route path="/301">
              <GameConfig title="301" />
            </Route>
            <Route path="/cricket">
              <GameConfig title="Cricket" />
            </Route>
          </Switch>
        </Layout>
      </Router>
    </div>
  );
}

export default App;
