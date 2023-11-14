import React from 'react';
import { BiCart, BiUser, BiBell} from 'react-icons/bi';

export default function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container-fluid d-flex justify-content-between align-items-center">
        <div>
          <h4>Vouge Vista</h4>
          <ul className="navbar-nav mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link ms-5" href="/">
                Home
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="/blank">
                Men
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="/blank">
                Women
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="/blank">
                Contact Us
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link ms-5" href="/blank">
                About Us
              </a>
            </li>
          </ul>
        </div>

        <div className="d-flex align-items-center">
          
          <form className="d-flex">
            <input
              className="form-control me-2"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />
            <button className="btn btn-outline-success" type="submit">
              Search
            </button>
          </form>
          <ul className="navbar-nav me-4 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/blank">
                <BiCart style={{ fontSize: '30px', fontWeight: 'bold' }} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/blank">
                <BiBell style={{ fontSize: '30px', fontWeight: 'bold' }} />
              </a>
            </li>
          </ul>
          <ul className="navbar-nav me-2 mb-2 mb-lg-0">
            <li className="nav-item">
              <a className="nav-link" href="/blank">
                <BiUser style={{ fontSize: '30px', fontWeight: 'bold' }} />
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
