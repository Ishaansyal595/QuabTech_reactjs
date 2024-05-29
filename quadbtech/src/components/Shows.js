import React, { Component } from "react";
import { Summary } from "./Summary";
import "./shows.css";

export class Shows extends Component {
  state = {
    shows: [],
  };

  componentDidMount() {
    fetch("https://api.tvmaze.com/search/shows?q=all")
      .then((response) => response.json())
      .then((data) => {
        this.setState({ shows: data });
      });
  }

  render() {
    return (
      <div className="container mt-5">
        <h2>Shows Summary</h2>
        <div className="row">
          {this.state.shows.map(({ show }) => {
            console.log("Map", show);

            return (
              <Summary
                key={show.id}
                sname={show.name}
                ssummary={show.summary}
                originalimg={show.image?.medium}
                sUrl={`/show/${show.id}`}
              />
            );
          })}
        </div>
      </div>
    );
  }
}

export default Shows;
