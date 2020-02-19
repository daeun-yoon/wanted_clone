import React from "react";
import Header from "../../Components/Header/Header";
import "./Main.scss";
import Category from "../../Components/Category/Category";
import Filter from "../../Components/Filter/Filter";
import JobPosting from "../../Components/Jobposting/Jobposting";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      fetchData: []
    };
  }
  componentDidMount = () => {
    fetch("http://localhost:3000/data/jobData.json", {
      method: "GET"
    })
      .then(response => response.json())
      .then(response => {
        console.log(response);
        this.setState({
          fetchData: response.jobData
        });
      });
  };

  render() {
    const jobList = this.state.fetchData.map(el => (
      <JobPosting
        comLogo={el.comLogo}
        jobPosition={el.position}
        company={el.company}
        city={el.location}
        compensation={el.compensation}
        likesnum={el.likesNum}
      />
    ));
    return (
      <>
        <Header />
        <Category />
        <Filter />
        <div className="mainPage">
          <div className="mainBox">{jobList}</div>
        </div>
      </>
    );
  }
}

export default Main;
