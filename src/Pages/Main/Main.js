import React from "react";
import Header from "../../Components/Header/Header";
import "./Main.scss";
import Category from "../../Components/Category/Category";
import wecode from "../../Images/wecode.png";

class Main extends React.Component {
  render() {
    return (
      <>
        <Header />
        <Category />
        <div className="mainPage">
          <div className="mainBox">
            <div className="filter">
              <div className="filterLeft">
                <button type="button" className="filterButton">
                  <span className="sPan">최신순</span>
                </button>
                <button type="button" className="filterButton">
                  <span className="sPan">국가</span>
                  <span className="sPan">한국</span>
                </button>
                <button type="button" className="filterButton">
                  <span className="sPan">지역</span>
                  <span className="sPan"> 전국</span>
                </button>
                <button type="button" className="filterButton">
                  <span className="sPan">경력</span>
                  <span className="sPan"> 전체</span>
                </button>
              </div>
              <div className="filterRight">
                <button type="button" className="filterButton">
                  <span className="sPan">필터</span>
                </button>
              </div>
            </div>
            <div className="jobPosting">
              <img alt="위코드 로고" src={wecode} />
            </div>
          </div>
        </div>
      </>
    );
  }
}

export default Main;
