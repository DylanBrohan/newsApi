import React from "react";
import {BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ListArticle from "./ListArticles";
import Header from "./Header"

class Main extends React.Component {
  render() {
    return (
    <div>
        <Header />
        
        <Router>
            <Switch>
                <Route exact path="/" component={ListArticle}/>
            </Switch>
        </Router>
    </div>
    );
  }
}

export default Main;