import "./App.css";
// eslint-disable-next-line
import React, { Component, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import News from "./components/News";
import LoadingBar from "react-top-loading-bar";

export default function App() {
  let state = {
    progress: 0,
  };

  /**
   *
   * @param {number} progress
   */
  const setProgress = (progress) => {
    state.progress = progress;
  };

  return (
    <Router>
      <div>
        <Navbar />
        <LoadingBar height={3} color="#f11946" progress={state.progress} />
        <Routes>
          <Route
            exact
            path="/"
            element={
              <News
                setProgress={setProgress}
                key="general"
                category="general"
              />
            }
          />
          <Route
            exact
            path="/business"
            element={
              <News
                setProgress={setProgress}
                key="business"
                category="business"
              />
            }
          />
          <Route
            exact
            path="/entertainment"
            element={
              <News
                setProgress={setProgress}
                key="entertainment"
                category="entertainment"
              />
            }
          />
          <Route
            exact
            path="/health"
            element={
              <News setProgress={setProgress} key="health" category="health" />
            }
          />
          <Route
            exact
            path="/science"
            element={
              <News
                setProgress={setProgress}
                key="science"
                category="science"
              />
            }
          />
          <Route
            exact
            path="/sports"
            element={
              <News setProgress={setProgress} key="sports" category="sports" />
            }
          />
          <Route
            exact
            path="/cricket"
            element={
              <News
                setProgress={setProgress}
                key="cricket"
                category="cricket"
              />
            }
          />
          <Route
            exact
            path="/technology"
            element={
              <News
                setProgress={setProgress}
                key="technology"
                category="technology"
              />
            }
          />
          <Route
            exact
            path="/anime"
            element={
              <News setProgress={setProgress} key="anime" category="anime" />
            }
          />
        </Routes>
      </div>
    </Router>
  );
}
