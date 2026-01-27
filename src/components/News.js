// eslint-disable-next-line
import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";

export default class News extends Component {
  static defaultProps = {
    category: "general",
  };

  static propTypes = {
    category: PropTypes.string,
  };
  date = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");
  constructor() {
    super();
    this.state = {
      articles: [],
      loading: true,
      page: 1,
      totalResults: 0,
      pageSize: 10,
      pageContentNo: 10,
    };
  }

  async componentDidMount() {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${
      this.date
    }&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${
      this.state.page
    }&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
    });
  }

  handlePrev = async () => {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${
      this.date
    }&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${
      this.state.page - 1
    }&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page - 1,
      totalResults: parsedData.totalResults,
      loading: false,
      pageSize: this.state.pageSize,
      pageContentNo: this.state.pageContentNo - 10,
    });
  };

  handleNext = async () => {
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&from=${
      this.date
    }&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${
      this.state.page + 1
    }&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    this.setState({
      articles: parsedData.articles,
      page: this.state.page + 1,
      totalResults: parsedData.totalResults,
      loading: false,
      pageSize: this.state.pageSize,
      pageContentNo: this.state.pageContentNo + 10,
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Top Headlines</h2>
        {this.state.loading && <Loader />}
        <div className="row">
          {!this.state.loading &&
            this.state.articles.map((e) => {
              return (
                <div className="col-md-4 my-2" key={e.url}>
                  <NewsItem
                    title={
                      e.title.length > 46
                        ? e.title.slice(0, 46) + "..."
                        : e.title
                    }
                    description={
                      e.description == null
                        ? "No description available"
                        : e.description.length > 86
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
            disabled={this.state.pageContentNo === 100}
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
