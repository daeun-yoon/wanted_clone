import React from "react";
import "./Category.scss";

class Category extends React.Component {
  render() {
    return (
      <div className="categoryBox">
        <div className="entire">전체</div>
        <div className="categoryList">
          <ul className="boxIndustry">
            <div>
              <li className="industries">F&B</li>
            </div>

            <li className="industries">개발</li>
            <li className="industries">건설,시설</li>
            <li className="industries">게임 제작</li>
            <li className="industries">경영, 비즈니스</li>
            <li className="industries">고객서비스, 리테일</li>
            <li className="industries">디자인</li>
            <li className="industries">마케팅, 광고</li>
            <li className="industries">물류, 무역</li>
            <li className="industries">미디어</li>
            <li className="industries">법률, 법집행기관</li>
            <li className="industries">엔지니어링, 설계</li>
            <li className="industries">영업</li>
            <li className="industries">의료, 제작, 바이오</li>
            <li className="industries">인사, 교육</li>
            <li className="industries">정부, 비영리</li>
            <li className="industries">제조, 생산</li>
            <li className="industries">투자, 분석, 부동산</li>
          </ul>
        </div>
      </div>
    );
  }
}
export default Category;
