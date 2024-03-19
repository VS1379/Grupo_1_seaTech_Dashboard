import React from "react";
import CategoriesRow from "./CategoriesRow";

let tableRowsData = [
  {
    Categories: ["Velero", "MotoAgua", "Yate", "Barco"],
  },
];

function Categories() {
  return (
    /* <!-- DataTales Example --> */
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Categories</h1>
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
                </tr>
              </thead>
              <tbody>
                {tableRowsData.map((row, i) => {
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
