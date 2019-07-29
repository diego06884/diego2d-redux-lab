import React from "react";
import { Route, Switch } from "react-router-dom";
import Header from "./components/common/Header";
import PageNotFound from "./components/PageNotFound";
import HomePage from "./components/home/HomePage";
import AboutPage from "./components/about/AboutPage";
import CoursesPage from "./components/courses/CoursesPage";

const App = () => {
  return (
    <div className="container-fluid">
      <Header />
      <Switch>
        <Route path="/" component={HomePage} exact />
        <Route path="/about" component={AboutPage} />
        <Route path="/courses" component={CoursesPage} />
        <Route component={PageNotFound} />
      </Switch>
    </div>
  );
};

export default App;
