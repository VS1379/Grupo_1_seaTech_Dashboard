import React from "react";
import CategoriesRow from "./CategoriesRow";
import { CategoriesAPI } from "../services/CategoriesAPI";
import { useEffect, useState } from "react";

function Categories() {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    console.log("MONTADO");
    const fetchData = async () => {
      try {
        const data = await CategoriesAPI.get();
        setCategories(data.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("ACTUALIZADO");
    console.log(categories);
  }, [categories]);
  return (
    /* <!-- DataTales Example --> */
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 m-5">Categories</h1>
      </div>

      <div className="card shadow mb-4">
        <div className="card-body">
          <div className="table-responsive">
            <table
              className="table table-bordered"
              id="dataTable"
              width="100%"
              cellSpacing="0"
            >
              <thead>
                <tr>
                  <th class="text-left display-4">Tipos de Categoria</th>
                </tr>
              </thead>
              <tbody>
                {categories.map((row, i) => {
                  return <CategoriesRow {...row} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
