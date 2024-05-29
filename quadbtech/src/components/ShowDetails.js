import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import "./ShowDetails.css";

const ShowDetails = () => {
  const { id } = useParams(); // Retrieve the 'id' parameter from the URL
  const [show, setShow] = useState(null);

  useEffect(() => {
    if (id) {
      // Check if 'id' is valid
      console.log("Fetching id: ", id);
      fetch(`https://api.tvmaze.com/shows/${id}`)
        .then((response) => response.json())
        .then((data) => setShow(data))
        .catch((error) => console.error("Error fetching data:", error));
    }
  }, [id]); // Fetch data whenever 'id' changes

  if (!show) return <div>Loading...</div>;

  return (
    <div className="card">
      <div className="card-left">
        {show.image && (
          <img
            src={show.image.medium}
            className="card-img-top"
            alt={show.name}
          />
        )}
      </div>
      <div className="card-right">
        <div className="name">
          <h1>{show.name}</h1>
        </div>
        <div className="summary">
          <p
            className="card-text"
            dangerouslySetInnerHTML={{ __html: show.summary }}
          ></p>
        </div>
        <div className="button">
          <Link to={`/book/${show.id}`} className="btn btn-primary">
            Book Ticket
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ShowDetails;
