import React from "react";
import "./Category.scss";
import CategoryList from "../CategoryList/CategoryList";

class Category extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: []
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/category.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          fetchData: response.category
        });
      });
  };

  render() {
    const a = this.state.fetchData.map(el => (
      <CategoryList categoryPic={el.categoryPic} industry={el.industry} />
    ));
    return (
      <div className="categoryBox">
        <div className="entire">전체</div>
        <div className="categoryList">
          <div className="boxIndustry">{a}</div>
        </div>
      </div>
    );
  }
}
export default Category;
