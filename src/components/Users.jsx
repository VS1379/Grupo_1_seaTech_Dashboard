import React from "react";
import UsersRow from "./UsersRow";

let tableRowsData = [
  {
    Title: "Velero MISFORTUNE",
    Model: "2020",
    Color: "Rojo",
    Category: ["Velero", "Barco"],
  },
  {
    Title: "Yate",
    Model: "2024",
    Color: "Blanco",
    Category: ["Yate", "Barco", "Grande"],
  },
];

function Users() {
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
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>Título</th>
                  <th>Model</th>
                  <th>Color</th>
                  <th>Categories</th>
                </tr>
              </tfoot>
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

export default Users;
