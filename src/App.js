import "./Style/App.css";
import ArticleCard from "./Components/ArticleCard";
import Header from "./Components/Header";

import React, { Component } from "react";

import { Form, Container, Col, Row, CardColumns } from "react-bootstrap";

// import from jquery package
import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "no"
    };
    const searchTerm = "";
    const source = "country=ie&"
    this.componentDidMount(searchTerm, source);
  }

  componentDidMount(searchTerm, source) {

    // API source as variable of urlString
    const urlString =
      "https://newsapi.org/v2/top-headlines?"+source+"apiKey=e2f6cea63beb4204b7034dc0764d542e&q=" +
      searchTerm;

    // jason file for ajax
    $.ajax({
      url: urlString,
      success: searchResults => {
        // console.log("fetched data successfully");
        // console.log(searchResults);
        const results = searchResults.articles;
        // console.log(results[0]);

        var articleList = [];
        
        //For each result 
        results.forEach(article => {
          // console.log(article.title)

          // Each card created placed into news variable
          const news = (
            <ArticleCard
            key={article.title + article.urlToImg}
            news={article}
          />
          );
          // push news to articleList array
          articleList.push(news);
        });

        this.setState({ rows: articleList });
      }

      // error: (xhr, status, err) => {
      //   console.log.error("Failed to fetch data");
      // }
    });
  }

  //Event Listener to changes in searchbar
  //Value bounded to this
  handleChange(e) {
    // console.log(event.target.value); // Log each key pressed
    const searchTerm = e.target.value;
    const source = "country=ie&";
    this.componentDidMount(searchTerm, source);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Container>
          <Form className="search-bar">
            <Form.Group as={Row} className="search-bar">
              <Col xs={{span: 8, offset: 2}} >
                <Form.Control
                  defaultValue=""
                  onChange={this.handleChange.bind(this)}
                  placeholder="{}+'Search a keyword'"
                />
              </Col>
            </Form.Group>
          </Form>
          <CardColumns>{this.state.rows}</CardColumns>
        </Container>
      </div>
    );
  }
}

export default App;
