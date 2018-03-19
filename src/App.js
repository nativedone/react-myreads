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
    appState: "loading" // or 'success' or 'error'
  };

  componentDidMount() {
    BooksAPI.getAll()
      .then(allBooks =>
        this.setState({
          allBooks,
          appState: "success"
        })
      )
      .catch(rejection =>
        this.setState({
          appState: "error"
        })
      );
  }

  render() {
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
