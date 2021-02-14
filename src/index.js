
import './index.css';
import App from './components/App';
import Post2 from './components/Post2';
import Post1 from './components/Post1';
import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route, Switch } from "react-router-dom";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <BrowserRouter>
    <Switch>
    <Route exact path="/" component={App} />
    <Route path="/post2" component={Post2} />
    <Route path="/post1" component={Post1} />
  </Switch>
  </BrowserRouter>,
  rootElement
);