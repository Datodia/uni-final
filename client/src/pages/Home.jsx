import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function Home() {
  const [categories, setCategories] = useState({});
  useEffect(() => {
    axios
      .get("http://localhost:3000/api/categories")
      .then((res) => setCategories(res.data));
  }, []);

  return (
    <div className="p-8 flex flex-col gap-4">
      <Navbar />
      <div className="flex items-center justify-between">
        <h1 className="text-xl font-bold">Categoris</h1>
        <button className="bg-blue-800 text-white font-semibold text-base p-1 rounded-md">
          <Link to={'addCategory'}>Create Category</Link>
        </button>
      </div>
      <div>
        {categories.data?.map((el) => (
          <Link to={`/category/${el._id}`} key={el._id} className="block text-blue-600 font-semibold text-base mt-3">
            {el.name}
          </Link>
        ))}
      </div>
    </div>
  );
}
