import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Paper, IconButton, InputBase } from "@mui/material";
import { Search } from "@mui/icons-material";

function SearchBar() {
  const [searchValue, setSearchValue] = useState(""); // State to store the search input value
  const navigate = useNavigate();

  const handleSearch = (e) => {
    e.preventDefault();
    // Redirect to the search results page with the search query

    if (searchValue) {
      navigate(`/search/${searchValue}`);
      setSearchValue("");
    }
  };

  return (
    <Paper
      component="form"
      onSubmit={handleSearch} // Handle form submission
      sx={{
        borderRadius: 20,
        border: "1px solid #e3e3e3",
        pl: 2,
        boxShadow: "none",
        display: "flex", // Add this to ensure proper layout
        alignItems: "center", // Center the input and button vertically
        justifyContent: "center",
        mr: { sm: 5 },
      }}
    >
      <InputBase
        className="search-bar"
        placeholder="Search.."
        value={searchValue}
        onChange={(e) => setSearchValue(e.target.value)} // Update the searchValue state
      />
      <IconButton type="submit" sx={{ p: "10px", color: "red" }}>
        <Search />
      </IconButton>
    </Paper>
  );
}

export default SearchBar;
