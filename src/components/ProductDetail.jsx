import React from "react";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { ProductsAPI } from "../services/ProductsAPI";

function ProductDetail() {
  const [product, SetProduct] = useState([]);

  const id = useParams();

  useEffect(() => {
    console.log("Montado");
    const fetchdata = async () => {
      try {
        SetProduct(await ProductsAPI.getById(id.match));
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    console.log("Actualizado");
    console.log(product);
  }, [product]);

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">
            {"TITULO"}
            {"no id"}
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={"imagenFondo"}
              alt=" Star Wars - Mandalorian "
            />
          </div>
          <p>{"DESCRIPCION"}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            {"IR AL SITIO"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
