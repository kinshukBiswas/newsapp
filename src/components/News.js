// eslint-disable-next-line
import PropTypes from "prop-types";
import { Component } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

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

  wait = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

  async updateNews(page, category = this.props.category) {
    const startTime = Date.now();
    let url = `https://newsapi.org/v2/everything?q=${category}&language=en&from=${this.date}&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${page}&pageSize=${this.state.pageSize}`;
    this.setState({ loading: true });
    let data = await fetch(url);
    let parsedData = await data.json();
    const elapsed = Date.now() - startTime;
    if (elapsed < 1500) {
      await this.wait(1500 - elapsed);
    }
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      loading: false,
      page: page,
      pageContentNo:
        (page - 1) * this.state.pageSize + 10 > 0
          ? (page - 1) * this.state.pageSize + 10
          : 10,
    });
    document.title = `NewsMonkey - ${this.props.category.charAt(0).toUpperCase() + this.props.category.slice(1)}`;
  }

  async componentDidMount() {
    this.updateNews(this.state.page);
  }

  fetchMoreData = async () => {
    const startTime = Date.now();
    const nextPage = this.state.page + 1;
    let url = `https://newsapi.org/v2/everything?q=${this.props.category}&language=en&from=${this.date}&sortBy=publishedAt&apiKey=cf8c035a536a432597a385b4e0eb7d28&page=${nextPage}&pageSize=${this.state.pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    const elapsed = Date.now() - startTime;
    if (elapsed < 1500) {
      await this.wait(1500 - elapsed);
    }
    this.setState({
      articles: parsedData.articles,
      totalResults: parsedData.totalResults,
      page: nextPage,
      pageContentNo: Math.min(nextPage * this.state.pageSize, 100),
    });
  };

  render() {
    return (
      <div className="container">
        <h2 className="text-center">Top Headlines</h2>
        {/* {this.state.loading && <Loader />} */}
        <InfiniteScroll
          dataLength={
            this.state.articles == undefined ? 0 : this.state.articles.length
          }
          next={this.fetchMoreData}
          hasMore={this.state.pageContentNo < 100}
          loader={<Loader />}
        >
          <div className="row">
            {this.state.articles?.map((e) => {
              return (
                <div className="col-md-4 my-2" key={e.url}>
                  <NewsItem
                    title={
                      e.title.length > 73
                        ? e.title.slice(0, 73) + "..."
                        : e.title
                    }
                    description={
                      e.description == null
                        ? "No description available"
                        : e.description.length > 111
                          ? e.description.slice(0, 86) + "..."
                          : e.description
                    }
                    imageUrl={e.urlToImage}
                    newsUrl={e.url}
                    author={
                      e.author !== undefined && e.author !== null
                        ? e.author
                        : "Unknown"
                    }
                    date={new Date(e.publishedAt)
                      .toString()
                      .replace(/GMT\+0530/, "GMT+05:30")}
                    mouseHoverer={e.title}
                  />
                </div>
              );
            })}
          </div>
        </InfiniteScroll>
      </div>
    );
  }
}
