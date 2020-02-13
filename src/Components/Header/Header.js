import React from "react";
import "./Header.scss";

class Header extends React.Component {
  render() {
    return (
      <div class="navBar">
        <nav className="bar">
          <div className="companyName">Wanted</div>
          <ul className="topic">
            <li className="content">탐색</li>
            <li className="content">직군별 연봉</li>
            <li className="content">이력서</li>
            <li className="content">추천</li>
            <li className="content">이벤트</li>
            <li className="content">매치업</li>
          </ul>

          <ul className="options">
            <li>
              <button className="search" type="button"></button>
            </li>
            <li className="content">회원가입/로그인</li>
            <li className="content">서비스 소개</li>
            <li className="content">기업 서비스</li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Header;
