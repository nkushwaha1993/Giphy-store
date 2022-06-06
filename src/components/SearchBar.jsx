import React from "react";

const SearchBar = ({ onSearchChange }) => {
  const handleChange = (searchInput) => {
    onSearchChange(searchInput);
  };

  return (
    <div className="container">
      <div className="row">
        <div className="col-lg-3 mx-auto">
          <div className="input-group">
            <input
              type="search"
              id="form1"
              className="form-control"
              placeholder="search"
              onChange={(event) => handleChange(event.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchBar;
