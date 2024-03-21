import React, { useEffect, useState } from "react";
import SmallCard from "./SmallCard";
import { CategoriesAPI } from "../services/CategoriesAPI";

/* <!-- Movies in DB --> */
let moviesInDB = {
  title: "Movies in Data Base",
  color: "primary",
  cuantity: 21,
  icon: "fa-clipboard-list",
};

/* <!-- Total awards --> */

let totalAwards = {
  title: " Total awards",
  color: "success",
  cuantity: "79",
  icon: "fa-award",
};

/* <!-- Actors quantity --> */

let actorsQuantity = {
  title: "Actors quantity",
  color: "warning",
  cuantity: "49",
  icon: "fa-user-check",
};

function CategoriesQuantity() {
  let [categories, SetCategories] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      try {
        let data = await CategoriesAPI.get();
        SetCategories(data.data);
      } catch (error) {
        console.log("Error al cargar las Categorias:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    
  }, [categories]);

  return (
    <div className="row">
     {categories.map((category, i) => {
        return <SmallCard {...category} key={i} />;
      })}
    </div>
  );
}

export default CategoriesQuantity;
