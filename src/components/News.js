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
              imageUrl="https://platform.theverge.com/wp-content/uploads/sites/2/chorus/uploads/chorus_asset/file/23318435/akrales_220309_4977_0232.jpg?quality=90&strip=all&crop=0%2C10.732984293194%2C100%2C78.534031413613&w=1200"
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
