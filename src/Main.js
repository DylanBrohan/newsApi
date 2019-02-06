import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import App from "./App";
import Sports from "./Sources/Sports";
import Header from "./Components/Header";

class Main extends React.Component {
  render() {
    return (
      <div>
        <Header />
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
