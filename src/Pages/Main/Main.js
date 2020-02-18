import React from "react";
import Header from "../../Components/Header/Header";
import "./Main.scss";
import Category from "../../Components/Category/Category";
import Filter from "../../Components/Filter/Filter";
import JobPosting from "../../Components/Jobposting/Jobposting";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Category />
        <div className="mainPage">
          <div className="mainBox">
            <Filter />
            <JobPosting />
          </div>
        </div>
      </>
    );
  }
}

export default Main;
