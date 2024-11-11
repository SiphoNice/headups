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
                  Welcome to our Books, Houses, and Characters Project! Here, we
                  bring stories to life by exploring the intricate worlds of
                  literature, architecture, and character development. This
                  project dives deep into the essence of each book, the unique
                  charm of each house, and the rich personalities that define
                  unforgettable characters.
                </p>
              </div>
              <div className="col-sm-4 offset-md-1 py-4">
                <h4>Links</h4>
                <ul className="list-unstyled">
                  <li>
                    <Link to="/" className="text-white">
                      Home
                    </Link>
                  </li>
                  <li>
                    <Link to="/books" className="text-white">
                      Books
                    </Link>
                  </li>
                  <li>
                    <Link to="/characters" className="text-white">
                      Characters
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
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-house-door-fill"
                viewBox="0 0 16 16"
              >
                <path d="M6.5 14.5v-3.505c0-.245.25-.495.5-.495h2c.25 0 .5.25.5.5v3.5a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5v-7a.5.5 0 0 0-.146-.354L13 5.793V2.5a.5.5 0 0 0-.5-.5h-1a.5.5 0 0 0-.5.5v1.293L8.354 1.146a.5.5 0 0 0-.708 0l-6 6A.5.5 0 0 0 1.5 7.5v7a.5.5 0 0 0 .5.5h4a.5.5 0 0 0 .5-.5" />
              </svg>
              <strong>HeadsUP</strong>
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
