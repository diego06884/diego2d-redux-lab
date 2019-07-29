import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="jumbotron">
      <h1>This is a React Redux exercise</h1>
      <p>Created by me</p>
      <Link to="/about" className="btn btn-lg btn-primary">
        Learn more
      </Link>
    </div>
  );
};

export default HomePage;
