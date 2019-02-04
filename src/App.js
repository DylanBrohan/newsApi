import React, { Component } from "react"

import "./App.css"
import NewsList from "./newsList"
import Header from "./Header"

import $ from "jquery"
// import axios from "axios";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {}
    this.searchNews()
  }

  searchNews(searchTerm) {
    const urlString =
      "https://newsapi.org/v2/everything?apiKey=e2f6cea63beb4204b7034dc0764d542e&q=" +
      searchTerm;
    $.ajax({
      url: urlString,
      success: searchResults => {
        console.log("fetched data successfully")
        // console.log(searchResults);
        const results = searchResults.articles
        // console.log(results[0]);

        var newsLists = [];

        results.forEach(article => {
          console.log(article.title)
          const news = <NewsList key={article.id} news={article} />;
          newsLists.push(news)
        });

        this.setState({ rows: newsLists })
      }
      // error: (xhr, status, err) => {
      //   console.log.error("Failed to fetch data");
      // }
    });
  }

  searchHandler(event) {
    // console.log(event.target.value); // Log each key pressed
    const searchTerm = event.target.value
    this.searchNews(searchTerm)
  }

  render() {
    return (
      <div className="container">
        <Header />

        <input
          style={{
            fontSize: 24,
            display: "block",
            width: "100%",
            paddingTop: 8,
            paddingBottom: 8,
            paddingLeft: 16
          }}
          onChange={this.searchHandler.bind(this)}
          placeholder="Search news article"
        />

        {this.state.rows}
      </div>
    );
  }
}

export default App