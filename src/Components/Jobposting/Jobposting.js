import React from "react";
import "../Jobposting/Jobposting.scss";

class jobPosting extends React.Component {
  render() {
    return (
      <div className="jobPosting">
        <a href="https://www.wanted.co.kr/wd/34887?referer_id=841099">
          <img className="picture" alt="회사사진" src={this.props.comLogo} />
          <div className="interest">
            <button className="likes">
              <img
                className="heart"
                alt="Heart"
                src="https://colorhunt.co/img/color-hunt-palettes-icon-heart-blue.png"
              />
              <span className="likesNum">{this.props.likesnum}</span>
            </button>
          </div>
        </a>
        <div className="jobInfo">
          <dl className="jobDetail">
            <dt className="jobPosition">{this.props.jobPosition}</dt>
            <dd className="compDetail">
              {this.props.company}
              <br />
              <span className="compDetail">{this.props.city}</span>
              <sapn className="locationDot">.</sapn>
              <span className="compDetail">{this.props.country}</span>
            </dd>
          </dl>
          <div className="compensation">{this.props.compensation}</div>
        </div>
      </div>
    );
  }
}

export default jobPosting;
