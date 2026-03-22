// eslint-disable-next-line
import PropTypes from "prop-types";
import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <nav
        data-bs-theme="dark"
        className="navbar navbar-expand-lg bg-body-tertiary"
      >
        <div className="container-fluid">
          <Link className="navbar-brand" to="/">
            NewsMonkey
          </Link>
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
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link" aria-current="page" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item dropdown">
                {/* eslint-disable-next-line */}
                <a
                  className="nav-link dropdown-toggle"
                  href="#"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                >
                  Get news on
                </a>
                <ul className="dropdown-menu">
                  <li>
                    <Link to="/" className="dropdown-item">
                      General
                    </Link>
                  </li>
                  <li>
                    <Link to="/business" className="dropdown-item">
                      Business
                    </Link>
                  </li>
                  <li>
                    <Link to="/entertainment" className="dropdown-item">
                      Entertainment
                    </Link>
                  </li>
                  <li>
                    <Link to="/health" className="dropdown-item">
                      Health
                    </Link>
                  </li>
                  <li>
                    <Link to="/science" className="dropdown-item">
                      Science
                    </Link>
                  </li>
                  <li>
                    <Link to="/cricket" className="dropdown-item">
                      Cricket
                    </Link>
                  </li>
                  <li>
                    <Link to="/sports" className="dropdown-item">
                      Sports
                    </Link>
                  </li>
                  <li>
                    <Link to="/technology" className="dropdown-item">
                      Technology
                    </Link>
                  </li>
                  <li>
                    <Link to="/anime" className="dropdown-item">
                      Anime
                    </Link>
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
