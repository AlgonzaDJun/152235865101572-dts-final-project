import React from "react";
import { NavLink } from "react-router-dom";

const About = () => {
  return (
    <div>
      <div className="container py-5 my-5">
        <div className="row">
          <div className="col-md-6">
            <h1 className="text-primary fw-bold mb-4">About US</h1>
            <p className="lead mb-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ab fugit
              ut odio molestias iure corporis, cumque adipisci fugiat autem
              consequatur! Cum quasi corrupti, molestiae impedit necessitatibus
              magni nobis id odit!
            </p>
            <NavLink to="/contact" className="btn btn-outline-primary px-3">
              Contact Us
            </NavLink>
          </div>
          <div className="col-md-6 d-flex justify-content-center">
            <img
              src="https://placekitten.com/1000/500"
              className="d-block w-100"
              alt="..."
              height="400px"
              width="400px"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
