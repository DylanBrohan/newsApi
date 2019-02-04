import React from "react"
import { Card } from "react-bootstrap"
import { Image } from "react-bootstrap"

class NewsList extends React.Component {
  viewArticle() {
    window.location.href = this.props.news.url
  }

  render() {
    return (
      <table key={this.props.news.id}>
        <tbody>
          <tr>
            <td>
              <Card>
                <Card.Body>
                  <Card.Title>{this.props.news.title}</Card.Title>
                  <Card.Subtitle className="mb-2 text-muted">
                    {this.props.news.author}, {this.props.news.publishedAt}
                  </Card.Subtitle>
                  <Card.Text>{this.props.news.description}
                  <Image style={{width:100, height:100}} src={this.props.news.urlToImage} roundedCircle />
                  </Card.Text>
                  
                  <Card.Link href={this.props.news.url}>
                    {this.props.news.source.name}
                  </Card.Link>
                  
                </Card.Body>
              </Card>
            </td>
          </tr>
        </tbody>
      </table>
    );
  }
}

export default NewsList
