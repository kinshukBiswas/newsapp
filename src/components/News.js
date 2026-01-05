// eslint-disable-next-line
import PropTypes from "prop-types";
import React, { Component } from "react";
import NewsItem from "./NewsItem";

export default class News extends Component {
  render() {
    return (
      <div className="container">
        <h2>Top Headlines</h2>
        <div className="row">
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
          <div className="col-md-4 my-2">
            <NewsItem
              title="News Title"
              description="my Description for the news. this will be changed later as per news."
            />
          </div>
        </div>
      </div>
    );
  }
}
