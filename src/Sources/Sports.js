import "../Style/App.css";
import ArticleCard from "../Components/ArticleCard";
import Header from "../Components/Header";

import React, { Component } from "react";
import { Form, Container, Col, Row, CardColumns } from "react-bootstrap";

import $ from "jquery";

class Sports extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sort: "no"
    };
    const searchTerm = "";
    const source ="country=ie&category=sports&"
    this.componentDidMount(searchTerm, source);
  }

  componentDidMount(searchTerm, source) {
    const urlString =
      "https://newsapi.org/v2/top-headlines?" +
      source +
      "apiKey=e2f6cea63beb4204b7034dc0764d542e&q=" +
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

  handleChange(event) {
    // console.log(event.target.value); // Log each key pressed
    const searchTerm = event.target.value;
    const source = "country=ie&category=sports";
    this.componentDidMount(searchTerm, source);
  }

  render() {
    return (
      <div>
        <Header></Header>
        <Container>
          <Form>
            <Form.Group as={Row}>
              <Col xs={{span: 8, offset: 2}}>
                <Form.Control
                  defaultValue=""
                  onChange={this.handleChange.bind(this)}
                  placeholder="Search a keyword"
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

export default Sports;
