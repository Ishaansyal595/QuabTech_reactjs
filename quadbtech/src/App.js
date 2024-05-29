import React, { Component } from "react";
import Navbar from "./components/Navbar";
import Shows from "./components/Shows";
import ShowDetails from "./components/ShowDetails";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import TicketForm from "./components/TicketForm";

class Ishaan extends Component {
  render() {
    return (
      <Router>
        <Navbar />
        <Routes>
          <Route path="/" element={<Shows />} />
          <Route path="/show/:id" element={<ShowDetails />} />
          <Route path="/book/:id" element={<TicketForm />} />
        </Routes>
      </Router>
    );
  }
}

export default Ishaan;
