import React from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <>
      <div className="container mx-auto">
        <div className="flex items-center justify-between">
          <div>Kings Motors</div>
          <div className="flex items-center gap-6">
            <Link to="/">
              <div>Home</div>
            </Link>
            <Link to="/about">
              <div>About Us</div>
            </Link>
            <Link to="/cars">
              <div>Our Cars</div>
            </Link>
            <Link to="/contact">
              <div>Contact</div>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
