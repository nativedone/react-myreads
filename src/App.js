import React from "react";
import { Route, Switch } from "react-router-dom";

import * as BooksAPI from "./BooksAPI";
import "./App.css";
import LibraryPage from "./pages/LibraryPage";
import SearchPage from "./pages/SearchPage";
import NotFoundPage from "./pages/NotFoundPage";

class BooksApp extends React.Component {
  state = {
    allBooks: [],
    appStatus: {
      value: "loading", // or "success" or "error"
      message: ""
    }
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks =>
        this.setState({
          allBooks: allBooks || [],
          appStatus: {
            ...this.state.appStatus,
            value: "success"
          }
        })
      )
      .catch(rejection =>
        this.setState({
          appStatus: {
            value: "error",
            message: rejection.toString()
          }
        })
      );
  }

  render() {
    console.log("appStatus", this.state.appStatus);
    return (
      <div className="app">
        <Switch>
          <Route exact path="/">
            {() => <LibraryPage {...this.state} />}
          </Route>
          <Route path="/search" component={SearchPage} />
          <Route component={NotFoundPage} />
        </Switch>
      </div>
    );
  }
}

export default BooksApp;
