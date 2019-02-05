import React from "react";
import axios from "axios";
import { CardColumns, Container, Form } from "react-bootstrap";
import Article from "./component/Article";

class Home extends React.Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      sort: "no",
      searchText: ""
    };
  }

  componentDidMount() {
    axios
      .get(
        "https://newsapi.org/v2/top-headlines?country=ie&apiKey=e2f6cea63beb4204b7034dc0764d542e"
      )
      .then(response => {
        const articles = response.data.results.map(article => {
          return {
            name: article.source.name,
            author: article.author,
            title: article.title,
            description: article.description,
            url: article.url,
            imgUrl: article.urlToImage,
            published: article.publishedAt,
            content: article.content
          };
        });
        this.setState({ articles: articles });
      });
  }

  render() {
    let articleList = articles.map(article => {
      const titleSearch = article.title.startsWith(this.state.searchText);
      const authorSearch = article.author.startsWith(this.state.searchText);
      return titleSearch && authorSearch ? (
        <Article
          title={article.title}
          imgUrl={article.urlToImage}
          nat={article.nationality}
          key={article.source.id + article.urlToImage}
        />
      ) : null;
    });

    return (
      <div class="content">
        <Form.Control
          name="searchText"
          label="Search"
          value={this.state.searchText}
          handleChange={this.handleChange}
          placeholder={"Search title or author"}
        />
        <Container>
          <CardColumns>{articleList}</CardColumns>
        </Container>
      </div>
    );
  }
}

export default Home;
