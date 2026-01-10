// eslint-disable-next-line
import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=india&from=${new Date(
      Date.now() - 86400000
    ).toLocaleDateString(
      "en-CA"
    )}&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${
      this.state.page
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/everything?q=india&from=${new Date(
      Date.now() - 86400000
    ).toLocaleDateString(
      "en-CA"
    )}&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${
      this.state.page - 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/everything?q=india&from=${new Date(
      Date.now() - 86400000
    ).toLocaleDateString(
      "en-CA"
    )}&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${
      this.state.page + 1
    }&pageSize=20`;
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  };

  render() {
    return (
      <div className="container">
        <h2>Top Headlines</h2>
        <div className="row">
          {this.state.articles.map((e) => {
            return (
              <div className="col-md-4 my-2" key={e.url}>
                <NewsItem
                  title={
                    e.title.length > 46 ? e.title.slice(0, 46) + "..." : e.title
                  }
                  description={
                    e.description.length > 86
                      ? e.description.slice(0, 86) + "..."
                      : e.description
                  }
                  imageUrl={e.urlToImage}
                  newsUrl={e.url}
                />
              </div>
            );
          })}
        </div>
        <div className="container d-flex justify-content-between">
          <button
            disabled={this.state.page === 1}
            className="btn btn-dark justify-content-between"
            onClick={this.handlePrev}
          >
            &larr; Previous
          </button>
          <button
            disabled={
              (this.state.totalResults &&
                this.state.page >= Math.ceil(this.state.totalResults / 20)) ||
              this.state.totalResults === 0 ||
              this.state.articles.length === 0 ||
              this.state.page >= 5
            }
            className="btn btn-dark d-flex justify-content-between"
            onClick={this.handleNext}
          >
            Next &rarr;
          </button>
        </div>
      </div>
    );
  }
}
