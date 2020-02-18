import React from "react";
import "../Filter/Filter.scss";

class filter extends React.Component {
  render() {
    return (
      <div className="filter">
        <div className="filterLeft">
          <button type="button" className="filterButton">
            <span className="filterDetail">최신순</span>
          </button>
          <button type="button" className="filterButton">
            <span className="filterDetail ilDan">국가</span>
            <span className="filterDetail">한국</span>
          </button>
          <button type="button" className="filterButton">
            <span className="filterDetail ilDan">지역</span>
            <span className="filterDetail"> 전국</span>
          </button>
          <button type="button" className="filterButton">
            <span className="filterDetail ilDan">경력</span>
            <span className="filterDetail"> 전체</span>
          </button>
        </div>
        <div className="filterRight">
          <button type="button" className="filterButton">
            <span className="filterDetail">필터</span>
          </button>
        </div>
      </div>
    );
  }
}

export default filter;
