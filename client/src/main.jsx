import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import AddCategory from "./pages/AddCategory"
import CategorySlug from "./pages/CategotySlug";
import Movies from "./pages/Movies";
import AddMovie from "./pages/AddMovie";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addCategory" element={<AddCategory />} />
          <Route path="/category/:id" element={<CategorySlug />} />
          <Route path="/movies" element={<Movies />} />
          <Route path="/movies/addMovie" element={<AddMovie />} />
        </Routes>
      </BrowserRouter>
  </React.StrictMode>
);
