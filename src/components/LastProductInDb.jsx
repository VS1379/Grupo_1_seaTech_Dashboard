import { useEffect, useState } from "react";
import React from "react";
import { ProductsAPI } from "../services/ProductsAPI";

function LastProductInDb() {
  let [productos, SetProductos] = useState([]);

  useEffect(() => {
    console.log("Montado");
    let fetchData = async () => {
      try {
        let data = await ProductsAPI.get();
        data.data.sort((a, b) => b.id - a.id);
        SetProductos(data.data);
      } catch (error) {
        console.log("Error al cargar los productos:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Actualizado");
  }, [productos]);

  function imagen() {
    if (productos[0].image) {
      return JSON.parse(productos[0].image).url;
    }
  }

  return (
    <div className="col-lg-11 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800 m-5">
            Ultimo Producto Creado
          </h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <h5>{productos[0]?.name}</h5>
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              src={productos[0] ? imagen() : "Cargando"}
              alt="Barco"
            />
          </div>
          <p>{productos[0]?.description}</p>
          <a
            className="btn btn-danger"
            target="_blank"
            rel="nofollow"
            href={"http://localhost:3000/products/detail/" + productos[0]?.uuid}
          >
            Detalle del Producto
          </a>
        </div>
      </div>
    </div>
  );
}

export default LastProductInDb;
