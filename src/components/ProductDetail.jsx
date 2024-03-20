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
        let data = await ProductsAPI.getById(id.id);
        SetProduct(data.data);
      } catch (error) {
        console.error("Error al obtener el producto:", error);
      }
    };
    fetchdata();
  }, []);
  useEffect(() => {
    console.log("Actualizado");
  }, [product]);

  function imagen() {
    if (product.image) {
      product.image = product.image.slice(product.image.indexOf("https"), [
        -2 + product.image.length,
      ]);
      return product.image;
    }
  }

  return (
    <div className="col-lg-6 mb-4">
      <div className="card shadow mb-4">
        <div className="card-header py-3">
          <h5 className="m-0 font-weight-bold text-gray-800">{product.name}</h5>
        </div>
        <div className="card-body">
          <div className="text-center">
            <img
              className="img-fluid px-3 px-sm-4 mt-3 mb-4"
              style={{ width: 40 + "rem" }}
              alt="Barco"
              src={imagen()}
            />
          </div>
          <p>{product.description}</p>
          <a className="btn btn-danger" target="_blank" rel="nofollow" href="/">
            {"URL"}
          </a>
        </div>
      </div>
    </div>
  );
}

export default ProductDetail;
