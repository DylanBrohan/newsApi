import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Sports from "./Sources/Sports";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Router>
          <Switch>
            <Route exact path="/" component={App} />
            <Route exact path="/Sports" component={Sports} />
          </Switch>
        </Router>
      </div>
    );
  }
}

export default Main;
