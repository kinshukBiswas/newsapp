// eslint-disable-next-line
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class NewsComp1 extends Component {
  render() {
    let { title, description, imageUrl, newsUrl, author, date, mouseHoverer } =
      this.props;
    return (
      <div>
        <div
          className="card"
          style={{
            height: "600px",
          }}
        >
          <img src={imageUrl} className="card-img-top" alt="" />
          <div className="card-body">
            <h5 className="card-title" title={mouseHoverer}>
              {title}
            </h5>
            <p className="card-text">
              {description == null ? "No description available" : description}
            </p>
            <a
              href={newsUrl}
              className="btn btn-primary"
              target="_blank"
              rel="noreferrer"
            >
              Read More Here &rarr;
            </a>
          </div>
          <div className="card-footer">
            <small className="text-body-secondary">
              By {author} on {date}
            </small>
          </div>
        </div>
      </div>
    );
  }
}
