import React, { useEffect, useState } from "react";
import UsersRow from "./UsersRow";
import { UsersAPI } from "../services/UsersAPI";

function Users() {
  const [users, SetUsers] = useState([]);

  useEffect(() => {
    console.log("Montado");
    const fetchData = async () => {
      try {
        let data = await UsersAPI.get();
        SetUsers(data.data);
      } catch (error) {
        console.log("Error al obtener los usuarios:", error);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    console.log("Actualizado");
    console.log(users);
  }, [users]);

  return (
    /* <!-- DataTales Example --> */
    <div className="container-fluid">
      <div className="d-sm-flex aligns-items-center justify-content-between mb-4">
        <h1 className="h3 mb-0 text-gray-800 m-5">Users</h1>
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
                  <th>Celular</th>
                  <th>Email</th>
                  <th>Direccion</th>
                  <th>Provincia</th>
                  <th>Rol</th>
                  <th>Detalle User</th>
                </tr>
              </thead>
              <tfoot></tfoot>
              <tbody>
                {users.map((row, i) => {
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
