import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div>
        <nav className="bar">
          <div className="companyName">Wanted</div>
          <div className="navMiddle">
            <ul className="topic">
              <li>
                <div className="content">탐색</div>
              </li>
              <li>
                <div className="content">직군별 연봉</div>
              </li>
              <li>
                <div className="content">이력서</div>
              </li>
              <li>
                <div className="content">추천</div>
              </li>
              <li>
                <div className="content">이벤트</div>
              </li>
              <li>
                <div className="content">매치업</div>
              </li>
            </ul>
          </div>
          <div className="navEdge">
            <ul className="options">
              <li>
                <button className="search" type="button"></button>
              </li>
              <li>
                <div className="content">회원가입/로그인</div>
              </li>
              <li>
                <div className="content">서비스 소개</div>
              </li>
              <li>
                <div className="content">기업 서비스</div>
              </li>
            </ul>
          </div>
        </nav>
      </div>
    );
  }
}

export default Header;
