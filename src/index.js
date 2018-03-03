import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { createStore, applyMiddleware } from "redux";
import promise from "redux-promise";
import {BrowserRouter, Route, Switch} from 'react-router-dom';

import reducers from "./reducers";
import PostList from "./components/PostList";
import PostShow from "./components/PostShow";

const createStoreWithMiddleware = applyMiddleware(promise)(createStore);

ReactDOM.render(
  <Provider store={createStoreWithMiddleware(reducers)}>
    <BrowserRouter>
      <div>
        <Switch>
          <Route path="/posts/:id" component={PostShow} />
          <Route path="/" component={PostList} />
        </Switch>
      </div>
    </BrowserRouter>
  </Provider>
  , document.querySelector(".container"),
);
