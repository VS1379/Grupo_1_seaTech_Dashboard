import React, { useEffect, useState } from "react";
import ProductRow from "./ProductRow";
import { ProductsAPI } from "../services/ProductsAPI";

function Products() {
  const [tableRowsData, setTableRowsData] = useState([]);

  useEffect(() => {
    console.log("MONTADO");
    const fetchData = async () => {
      try {
        const data = await ProductsAPI.get();
        setTableRowsData(data.data);
      } catch (error) {
        console.error("Error al obtener los productos:", error);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("ACTUALIZADO");
    console.log(tableRowsData);
  }, [tableRowsData]);

  return (
    /* <!-- DataTales Example --> */
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Productos</h1>
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
                  <th>Nombre</th>
                  <th>Precio</th>
                  <th>Modelo</th>
                  <th>Descripcion</th>
                  <th>Mas Detalles</th>
                </tr>
              </thead>
              <tfoot></tfoot>
              <tbody>
                {tableRowsData.map((row, i) => {
                  return <ProductRow {...row} key={i} />;
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
