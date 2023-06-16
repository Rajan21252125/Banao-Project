import React from "react";
import "./Navbar.css";

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-white d-flex justify-content-between">
      <div className="container-fluid">
        <a className="navbar-brand text-success fs-4 fw-bold" href="/">
          <img src="./image/whole.png" alt="logo" className="w-75" />
          {/* ATG.<span className='text-dark'>WORLD</span> */}
        </a>
        <form className="d-flex custom-search-form">
          <input
            className="form-control border rounded-pill custom-search-input"
            type="search"
            placeholder="&#128270; Search for your favourite group in ATG"
            aria-label="Search"
          />
        </form>
        <div className="navbar-nav flex-row pc">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle text-dark"
              href="/"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              create account. <span className="text-primary">It's Free</span>
            </a>
          </li>
        </div>
        <div class="dropdown mobile">
          <a
            class="btn  dropdown-toggle"
            href="/"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          > </a>
        </div>
      </div>
    </nav>
  );
}
