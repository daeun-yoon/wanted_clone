import React from "react";
import "../CategoryList/CategoryList.scss";

class CategoryList extends React.Component {
  render() {
    return (
      <div className="industries">
        <div
          className="pic"
          style={{
            backgroundImage: `url(${this.props.categoryPic})`
          }}
        >
          <div className="a">
            <p className="b">{this.props.industry}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default CategoryList;
