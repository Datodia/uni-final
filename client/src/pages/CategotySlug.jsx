import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Navbar from "../components/Navbar";
import axios from "axios";

export default function CategorySlug() {
  const param = useParams();
  const [category, setCategory] = useState({})

  useEffect(() => {
    axios
        .get(`http://localhost:3000/api/categories/${param.id}`)
        .then(res => setCategory(res.data))
  }, [])

  return (
    <div className="p-8">
    <Navbar />
      {category.data && category.data.movies.length > 0 ? category.data.movies.map(el => (
        <div className="border-2 p-2 rounded-md" key={el._id}>
            <h2>{el.title}</h2>
        </div>
      )): 
        <h1>No Movies Yet</h1>
      }
    </div>
  );
}
