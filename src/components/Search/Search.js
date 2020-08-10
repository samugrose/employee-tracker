import React from "react";
import "./search.css";

function Search(props) {

  return (
    <>
    <form className="row justify-content-center">
      <div className="form-group">
        <input
          onChange={props.handleInputChange}
          value={props.value}
          name="search"
          type="text"
          className="form-control text-center"
          placeholder="Filter By First Name"
          id="search"
        />
      </div>
    </form>
    </>
  );
}

export default Search;