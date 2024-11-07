import React from "react";
import { Link } from "react-router-dom";
const Nav = () => {
  return (
    <>
      <header data-bs-theme="dark">
        <div className="text-bg-dark collapse" id="navbarHeader">
          <div className="container">
            <div className="row">
              <div className="col-sm-8 col-md-7 py-4">
                <h4>About</h4>
                <p className="text-body-secondary">
                  Add some information about the album below, the author, or any
                  other background context. Make it a few sentences long so
                  folks can pick up some informative tidbits. Then, link them
                  off to some social networking sites or contact information.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="#" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      About us
                    </Link>
                  </li>
                  <li>
                    <Link to="#" className="text-white">
                      Contact
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="navbar navbar-dark bg-red shadow-sm">
          <div className="container">
            <Link to="#" className="navbar-brand d-flex align-items-center"> 
            <i className="bi bi-book"></i>
              <strong> Books</strong>
            </Link>
            <button
              className="navbar-toggler collapsed"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarHeader"
              aria-controls="navbarHeader"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
          </div>
        </div>
      </header>
    </>
  );
};

export default Nav;
