import React from "react";

function Search({search , onSearchChange}) {

  function handleSubmit(e) {
    e.preventDefault();
    console.log("submitted");
    onSearchChange(search)
  }
  function handleSearch(e){
    onSearchChange(e.target.value)
  }

  return (
    <form className="searchbar" onSubmit={handleSubmit}>
      <input
        type="text"
        id="search"
        placeholder="search free stuff"
        value={search}
        onChange={handleSearch}
      />
      <button type="submit">🔍</button>
    </form>
  );
}

export default Search;
