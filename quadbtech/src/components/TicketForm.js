import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const TicketForm = () => {
  const { id } = useParams();
  const [showName, setShowName] = useState("");

  useEffect(() => {
    console.log("Fetching data: ", id);

    // Fetch show details using the show ID
    fetch(`https://api.tvmaze.com/shows/${id}`)
      .then((response) => response.json())
      .then((data) => setShowName(data.name));
  }, [id]);

  const handleSubmit = (event) => {
    event.preventDefault();
    const userDetails = {
      name: event.target.name.value,
      email: event.target.email.value,
      showId: id,
    };
    sessionStorage.setItem("userDetails", JSON.stringify(userDetails));
    alert("Ticket booked successfully!");
  };

  return (
    <div className="container mt-5">
      <h1>Book Ticket for {showName}</h1> {/* Show the name of the show */}
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input type="text" className="form-control" id="name" required />
        </div>
        <div className="mb-3">
          <label htmlFor="number" className="form-label">
            Phone Number
          </label>
          <input type="number" className="form-control" id="number" required />{" "}
          {/* Corrected the id */}
        </div>
        <div className="mb-3">
          <label htmlFor="email" className="form-label">
            Email address
          </label>
          <input type="email" className="form-control" id="email" required />
        </div>
        <button type="submit" className="btn btn-primary">
          Submit
        </button>
      </form>
    </div>
  );
};

export default TicketForm;
