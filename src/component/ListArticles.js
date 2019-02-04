import React from "react"
import axios from 'axios'

class ListArticle extends React.Component {

    constructor(props){
        super(props)
        this.state = {
            articles: [],
            sort: 'no',
            searchText: '',
        }
    }

    componentDidMount() {
        axios.get("https://newsapi.org/v2/top-headlines?&apiKey=e2f6cea63beb4204b7034dc0764d542e")
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
                        content: article.content,
                }
            })
            this.setState({articles: articles});
        })

    }

  render() {
    return (
      <div className="container">

      </div>
    );
  }
}

export default ListArticle;