import React from "react";
import { Card } from "react-bootstrap";
import PropTypes from "prop-types";

class ArticleCard extends React.Component {
  viewArticle() {
    window.location.href = this.props.news.url;
  }

  render() {
    return (
                  <Card>
                    <Card.Img className="image-card" variant="top" src={this.props.news.urlToImage} />
                    <Card.Body>
                            <Card.Title>{this.props.news.title}</Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        {this.props.news.author}, {this.props.news.publishedAt}
                      </Card.Subtitle>
                      <Card.Text>{this.props.news.description}</Card.Text>

                      <Card.Link href={this.props.news.url}>
                        Article: {this.props.news.source.name}
                      </Card.Link>
                    </Card.Body>
                  </Card>
    );
  }
}

// Specifies the default values for props:
ArticleCard.defaultProps = {
  urlToImage: "http://via.placeholder.com/400x400",
  title: "News title",
  author: "Author Name",
  publishedAt: "yyyy-mm-ddT00:00:00Z",
  description: "News article description",
  name: "#"
};

// Checks that the correct type of props are supplied:
ArticleCard.propTypes = {
  urlToImage: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publishedAt: PropTypes.string,
  description: PropTypes.string,
  name: PropTypes.string
};

export default ArticleCard;
