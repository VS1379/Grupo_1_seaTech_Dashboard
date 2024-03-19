import React from "react";
import UsersRow from "./UsersRow";

let tableRowsData = [
  {
    Nombre: "JUANCITO",
    Apellido: "PELUQUERO",
    Dni: "4355222",
    Color: "Rojo",
  },
  {
    Nombre: "PEPITO",
    Apellido: "BARBERzsd",
    Dni: "11111111",
    Color: "Amarillo",
  },
  {
    Nombre: "JUANCITO",
    Apellido: "PELUQUERO",
    Dni: "4355222",
    Color: "Rojo",
  },
  {
    Nombre: "PEPITO",
    Apellido: "BARBERzsd",
    Dni: "11111111",
    Color: "Amarillo",
  },
  {
    Nombre: "JUANCITO",
    Apellido: "PELUQUERO",
    Dni: "4355222",
    Color: "Rojo",
  },
  {
    Nombre: "PEPITO",
    Apellido: "BARBERzsd",
    Dni: "11111111",
    Color: "Amarillo",
  },
  {
    Nombre: "JUANCITO",
    Apellido: "PELUQUERO",
    Dni: "4355222",
    Color: "Rojo",
  },
  {
    Nombre: "PEPITO",
    Apellido: "BARBERzsd",
    Dni: "11111111",
    Color: "Amarillo",
  },
];

function Users() {
  return (
    /* <!-- DataTales Example --> */
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800">Users</h1>
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
                  <th>Apellido</th>
                  <th>Dni</th>
                  <th>Color</th>
                </tr>
              </thead>
              <tfoot>
                <tr>
                  <th>---</th>
                  <th>---</th>
                  <th>---</th>
                  <th>---</th>
                </tr>
              </tfoot>
              <tbody>
                {tableRowsData.map((row, i) => {
                  return <UsersRow {...row} key={i} />;
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
