import React from "react";
import "./Middle.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCaretDown , faUserGroup } from '@fortawesome/free-solid-svg-icons'

export default function Middle() {
  return (
    <nav className="navbar navbar-light container mt-4 text-danger border-bottom border-dark">
      <div className="container-fluid">
        <ul className="nav">
          <li className="nav-item">
            <a
              className="nav-link active text-dark"
              aria-current="page"
              href="/"
            >
              All Posts (32)
            </a>
          </li>
          <li className="nav-item middle-pc">
            <a className="nav-link text-dark" href="/">
              Article
            </a>
          </li>
          <li className="nav-item middle-pc">
            <a className="nav-link text-dark" href="/">
              Event
            </a>
          </li>
          <li className="nav-item middle-pc">
            <a className="nav-link text-dark" href="/">
              Education
            </a>
          </li>
          <li className="nav-item middle-pc">
            <a className="nav-link text-dark" href="/">
              Job
            </a>
          </li>
        </ul>
        <div class="dropdown middle-mobile">
          <button
            class="btn dropdown-toggle fw-800"
            style={{ backgroundColor: "transparent" }}
            type="button"
            id="dropdownMenuButton2"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Filter:All
          </button>
          <ul
            class="dropdown-menu dropdown-menu-dark"
            aria-labelledby="dropdownMenuButton2"
          >
            <li>
              <a class="dropdown-item active" href="/">
                Article
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Event
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Education
              </a>
            </li>
            <li>
              <a class="dropdown-item" href="/">
                Job
              </a>
            </li>
          </ul>
        </div>
        <form className="d-flex">
          <button className="btn shadow-none bg-light rounded" type="submit">
            Write a Post{" "}
            <FontAwesomeIcon icon={faCaretDown}/>
          </button>
          <button className="btn btn-primary w-40 mx-2" type="submit">
          <FontAwesomeIcon icon={faUserGroup} flip="horizontal" />  Join Group
          </button>
        </form>
      </div>
    </nav>
  );
}
