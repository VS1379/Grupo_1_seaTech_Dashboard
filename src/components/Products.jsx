import React, { useEffect } from "react";
import ProductRow from "./ProductRow";
import { ProductsAPI } from "../services/ProductsAPI";

function Products() {
  useEffect(() => {
    console.log("MONTADO");
  }, []);
  useEffect(() => {
    console.log("ACTUALIZADO");
    let tableRowsData = ProductsAPI.get().then((result) => {
      return result.data;
    });
    console.log(tableRowsData);
    {
      tableRowsData?.map((row, i) => {
        return <ProductRow {...row} key={i} />;
      });
    }
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
                  <th>Título</th>
                  <th>Model</th>
                  <th>Color</th>
                  <th>Categories</th>
                  <th></th>
                </tr>
              </thead>
              <tfoot></tfoot>
              <tbody></tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Products;
