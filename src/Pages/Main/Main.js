import React from "react";
import Header from "../../Components/Header/Header";
import "./Main.scss";
import Category from "../../Components/Category/Category";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Category />
      </>
    );
  }
}

export default Main;
