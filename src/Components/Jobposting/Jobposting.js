import React from "react";
import "../Jobposting/Jobposting.scss";

class jobPosting extends React.Component {
  render() {
    return (
      <div className="jobPosting">
        <a href="https://www.wanted.co.kr/wd/34887?referer_id=841099">
          <img
            className="picture"
            alt="회사사진"
            src="https://static.wanted.co.kr/images/company/10643/0e3i1jxflfjlevuc__400_400.jpg"
          />
          <div className="interest">
            <button className="likes">
              <img
                className="heart"
                alt="Heart"
                src="https://colorhunt.co/img/color-hunt-palettes-icon-heart-blue.png"
              />
              <span className="likesNum">30</span>
            </button>
          </div>
        </a>
        <div className="jobInfo">
          <dl className="jobDetail">
            <dt className="jobPosition">[외국계]건강기능식품 마케팅 PM</dt>
            <dd className="compDetail">
              시너지월드와이드코리아
              <br />
              <span className="compDetail">서울</span>
              <sapn className="locationDot">.</sapn>
              <span className="compDetail">한국</span>
            </dd>
          </dl>
          <div className="compensation">채용보상금 1,000,000원</div>
        </div>
      </div>
    );
  }
}

export default jobPosting;
