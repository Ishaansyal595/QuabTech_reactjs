import React, { Component } from "react";
import { Link } from "react-router-dom";
import "./summary.css";

export class Summary extends Component {
  render() {
    let { sname, ssummary, originalimg, sUrl } = this.props;
    return (
      <div>
        <div className="card">
          <div className="left">
            <img src={originalimg} className="card-img-top" alt="..." />
          </div>
          <div className="right">
            <h5 className="card-title">{sname}</h5>
            <p className="card-text">{ssummary}</p>
            <Link to={sUrl} className="btn btn-primary">
              Know More
            </Link>
          </div>
        </div>
      </div>
    );
  }
}

export default Summary;
