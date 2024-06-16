import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function AddProduct() {
  const [error, setError] = useState("");
  const [title, setTitle] = useState("");
  const [categoryName, setCategoryName] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    try {
      e.preventDefault();
      if (!categoryName.trim() || !title.trim()) {
        setError("Category And Title Is required");
        return;
      }
      const res = await axios.post("http://localhost:3000/api/movies", {
        title,
        category: categoryName
      });
      console.log(res, "res");
      if (res.status === 201) {
        navigate("/");
      }

      setError("");
    } catch (error) {
      setError(error.message)
    }
  };
  return (
    <div className="p-8">
      <Navbar />
      <form
        onSubmit={handleSubmit}
        className="p-4 rounded-lg border-2 border-black flex flex-col gap-4 mt-4"
      >
        <input
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          type="text"
          placeholder="Movie Title"
          className="border-2 border-black h-10 rounded-md"
        />
        <input
          value={categoryName}
          onChange={(e) => setCategoryName(e.target.value)}
          type="text"
          placeholder="Category Name"
          className="border-2 border-black h-10 rounded-md"
        />

        {error ? <p className="text-red-600">{error}</p> : null}
        <button className="p-3 bg-cyan-700 text-white font-bold">
          Add Movie
        </button>
      </form>
    </div>
  );
}
