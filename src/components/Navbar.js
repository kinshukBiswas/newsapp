// eslint-disable-next-line
import PropTypes from "prop-types";
import React, { Component } from "react";

export default class Navbar extends Component {
  render() {
    return (
      <>
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
          <div className="container-fluid">
            <a className="navbar-brand" href="/">
              NewsMonkey
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarSupportedContent"
              aria-controls="navbarSupportedContent"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div
              className="collapse navbar-collapse"
              id="navbarSupportedContent"
            >
              <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                <li className="nav-item">
                  <a className="nav-link" aria-current="page" href="/">
                    Home
                  </a>
                </li>
                <li className="nav-item dropdown">
                  <a
                    className="nav-link dropdown-toggle"
                    href="/"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-expanded="false"
                  >
                    Get news on
                  </a>
                  <ul className="dropdown-menu">
                    <li>
                      <a href="/" className="dropdown-item">
                        Business
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Entertainment
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        General
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Health
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Science
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Sports
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Technology
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        World
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Politics
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Travel
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Education
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Lifestyle
                      </a>
                    </li>
                    <li>
                      <a href="/" className="dropdown-item">
                        Food
                      </a>
                    </li>
                  </ul>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </>
    );
  }
}
