import "./Style/App.css";
import ArticleCard from "./Components/ArticleCard";

import React, { Component } from "react";
import { Form, Container, Col, Row } from "react-bootstrap";

import $ from "jquery";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "no"
    };
    const searchTerm = "";
    this.componentDidMount(searchTerm);
  }

  componentDidMount(searchTerm, source) {
    const urlString =
      "https://newsapi.org/v2/top-headlines?country=ie&apiKey=e2f6cea63beb4204b7034dc0764d542e&q=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        // console.log("fetched data successfully");
        // console.log(searchResults);
        const results = searchResults.articles;
        // console.log(results[0]);

        //Add each article into an array
        var articleList = [];

        results.forEach(article => {
          // console.log(article.title)
          const news = (
            <ArticleCard
              key={article.title + article.urlToImg}
              news={article}
            />
          );
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
    const source = "country=ie";
    this.componentDidMount(searchTerm, source);
  }

  render() {
    return (
      <div>
        <Container>
          <Form>
            <Form.Group as={Row}>
              <Col>
                <Form.Control
                  defaultValue=""
                  onChange={this.handleChange.bind(this)}
                  placeholder="Search a keyword"
                />
              </Col>
            </Form.Group>
          </Form>
          {this.state.rows}
        </Container>
      </div>
    );
  }
}

export default App;
