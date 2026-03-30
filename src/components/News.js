// eslint-disable-next-line
import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import Loader from "./Loader";
import InfiniteScroll from "react-infinite-scroll-component";

export default function News(props) {
  let date = new Date(Date.now()).toLocaleDateString("en-CA");
  const [articles, setArticles] = useState([]);
  const [loading, setLoading] = useState(true);
  const [page, setPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [pageContentNo, setPageContentNo] = useState(10);

  async function updateNews(page, category = props.category) {
    props.setProgress(10);
    let url = `https://api.currentsapi.services/v1/search?keywords=${category}&language=en&start-date=${date}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page_number=${page}&page_size=${pageSize}`;

    setLoading(true);

    let data = await fetch(url);

    props.setProgress(25);

    let parsedData = await data.json();

    props.setProgress(75);
    setArticles(parsedData.news);
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
  }, [props.category]);

  const fetchMoreData = async () => {
    setPage(page + 1);

    let url = `https://api.currentsapi.services/v1/search?keywords=${props.category}&language=en&start-date=${date}&apiKey=${process.env.REACT_APP_NEWS_API_KEY}&page_number=${page}&page_size=${pageSize}`;
    let data = await fetch(url);
    let parsedData = await data.json();
    setArticles((prev) => {
      const uniqueArticles = [
        ...new Map(
          [...prev, ...parsedData.news].map((item) => [item.id, item]),
        ).values(),
      ];
      return uniqueArticles;
    });
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
                <div className="col-md-4 my-2" key={e.id}>
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
                    imageUrl={e.image}
                    newsUrl={e.url}
                    author={
                      e.author !== undefined && e.author !== null
                        ? e.author
                        : "Unknown"
                    }
                    date={new Date(e.published)
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
