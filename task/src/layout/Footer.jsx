import React from "react";
import { Link } from "react-router-dom";
import { MdLocationPin } from "react-icons/md";
import { MdOutlinePhone } from "react-icons/md";
import { IoMailOutline } from "react-icons/io5";

const Footer = () => {
  return (
    <div className="d-flex justify-content-center  border-top">
      <div className="container row row-cols-1 row-cols-md-2 row-cols-lg-3  py-5">
        <div className="col mb-3">
          <ul className="nav flex-column text-dark">
            <li className="mb-2 d-flex align-items-center">
              <MdLocationPin className="me-2" /> 868 Fake Street, New York
            </li>
            <li className="mb-2 d-flex align-items-center">
              <MdOutlinePhone className="me-2" /> (+00) 025-1234-5678
            </li>
            <li className="mb-2 d-flex align-items-center">
              <IoMailOutline className="me-2" /> example.info@gmail.com
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="text-dark">Page</h5>
          <ul className="nav flex-column text-dark">
            <li className="mb-2">
              <Link to="/">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/news">News</Link>
            </li>
            <li className="mb-2">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
        <div className="col mb-3">
          <h5 className="text-dark">Lorem</h5>
          <ul className="nav flex-column text-dark">
            <li className="mb-2">
              <Link to="/home">Home</Link>
            </li>
            <li className="mb-2">
              <Link to="/news">News</Link>
            </li>
            <li className="mb-2">
              <Link to="/about">About us</Link>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Footer;
