import React from "react";

const TopNav = () => {
  return (
    <nav className="navbar navbar-expand-lg bg-dark">
      <div className="container-fluid">
        <a className="navbar-brand text-light" href="#">
          TeeRex Store
        </a>
        <input
          className="form-control w-50"
          type="search"
          placeholder="Search"
          aria-label="Search"
        />
        <button className="btn btn-outline-light" type="submit">
          Cart
        </button>
      </div>
    </nav>
  );
};

export default TopNav;
