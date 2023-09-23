import React from "react";
import { Stack } from "@mui/material";
import { categories } from "../utils/constants";
import "./Generel.css";

function Sidebar({ selectedCategory, setSelectedCategory }) {
  return (
    <Stack
      className="btn"
      direction="row"
      sx={{
        height: { sx: "auto", md: "95%" },
        flexDirection: { md: "column" },
      }}
    >
      {categories.map((cat) => (
        <button
          key={cat.id}
          className="category-btn"
          onClick={() => setSelectedCategory(cat.name)} // Call setSelectedCategories directly with cat.name
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            margin: "0.5rem",
            backgroundColor: cat.name === selectedCategory && "#FC1503",
            color: "white",
          }}
        >
          <span
            style={{
              color: cat.name === selectedCategory ? "white" : "red",
              marginRight: "15px",
            }}
          >
            {cat.icon}
          </span>
          <span
            style={{
              opacity: cat.name === selectedCategory ? "1" : "0.8",
            }}
          >
            {cat.name}
          </span>
        </button>
      ))}
    </Stack>
  );
}

export default Sidebar;
