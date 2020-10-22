import React from "react";
import "../../App.css";
import { Link } from "react-router-dom";
export default function Header() {
  return (
    <div className="nav">
      <Link style={{ textDecoration: "none", color: "#000" }} to="/movies">
        <div>AllMovies.uz</div>
      </Link>
      <ul>
        <li>Action</li>
        <li>Romantic</li>
        <li>Fight</li>
        <li>History</li>
      </ul>
    </div>
  );
}
