// eslint-disable-next-line
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  let date = new Date(Date.now() - 86400000).toLocaleDateString("en-CA");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [totalResults, setTotalResults] = useState(0);
  const [pageSize, setPageSize] = useState(10);
  const [pageContentNo, setPageContentNo] = useState(10);

  async function updateNews(page, category = props.category) {
    props.setProgress(10);
    let url = `https://newsapi.org/v2/everything?q=${category}&language=en&from=${date}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;

    setLoading(true);

    let data = await fetch(url);

    props.setProgress(25);

    let parsedData = await data.json();

    props.setProgress(75);
    setArticles(parsedData.articles);
    setTotalResults(parsedData.totalResults);
    setLoading(false);
    setPage(page);
    setPageContentNo(
      (page - 1) * pageSize + 10 > 0 ? (page - 1) * pageSize + 10 : 10,
    );
    props.setProgress(100);
    document.title = `NewsMonkey - ${props.category.charAt(0).toUpperCase() + props.category.slice(1)}`;
  }

  useEffect(() => {
    updateNews(1);
  }, []);

  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://newsapi.org/v2/everything?q=${props.category}&language=en&from=${date}&sortBy=publishedAt&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page=${page}&pageSize=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles(articles.concat(parsedData.articles));
    setTotalResults(parsedData.totalResults);
    setPage(page);
    setPageContentNo(Math.min(page * pageSize, 100));
  };
  return (
    <>
      <h2 className="text-center">Top Headlines</h2>
      <InfiniteScroll
        dataLength={articles === undefined ? 0 : articles.length}
        next={fetchMoreData}
        hasMore={pageContentNo < 100}
        loader={<Loader />}
      >
        <div
          className="container"
          style={{
            height: "auto",
            overflow: "hidden",
          }}
        >
          <div className="row">
            {articles?.map((e) => {
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
        </div>
      </InfiniteScroll>
    </>
  );
}

News.defaultProps = {
  category: "general",
};

News.propTypes = {
  category: PropTypes.string,
};
