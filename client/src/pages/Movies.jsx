import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Movies() {
  const [movies, setMovies] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/movies")
      .then((res) => setMovies(res.data));
  }, []);
  return (
    <div className="p-8 ">
      <Navbar />
      <div className="flex items-center justify-between mt-4">
        <h1 className="text-xl font-bold">Movies</h1>
        <button className="bg-blue-800 text-white font-semibold text-base p-1 rounded-md">
          <Link to={"addMovie"}>Create Movie</Link>
        </button>
      </div>
      <div className="border-2 border-black p-4 mt-4">
        {movies.data && movies.data.length > 0 ? (
          movies.data.map((el) => (
            <div key={el._id} className="border-2 border-md my-2 p-3">
              <h1>Title: {el.title}</h1>
              <h2>Category: {el.category}</h2>
            </div>
          ))
        ) : (
          <h1>No Products Available</h1>
        )}
      </div>
    </div>
  );
}
