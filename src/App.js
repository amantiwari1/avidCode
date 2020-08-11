import React from 'react';
import Main from "../src/Layouts/Homepage/Main/Main";
import './App.css';
import { BrowserRouter as Router, Switch,Route } from "react-router-dom";
import Heading from "./Layouts/Homepage/Heading/Heading";
import ViewArticles from "./Layouts/Homepage/ViewArticles/ViewArticles";
import NewArticles from "./Layouts/Homepage/NewArticle/NewArticles";
import ListTechName from "./Layouts/DetailsTech/listTechName"

import Footer from "./Layouts/Homepage/Footer/Footer";

function App() {
  return (
    <div>
      <Router>
      <Heading />
      <Switch>
        <Route path="/" exact>
          <Main />
        </Route>
        <Route path="/tech/:nametech/:nametools" exact >
          <ListTechName />
        </Route>
        <Route path="/tech/:nametech/:nametools/:id" exact>
          <ViewArticles />
        </Route>
        <Route path="/new-article" exact>
          <NewArticles />
        </Route>
      </Switch>
      <Footer />
      </Router>
      </div>
  );
}

export default App;
