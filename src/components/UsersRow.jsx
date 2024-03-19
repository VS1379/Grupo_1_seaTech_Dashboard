import React from "react";

function UsersRow({ Nombre, Apellido, Dni, Color }) {
  return (
    <tr>
      <td>{Nombre}</td>
      <td>{Apellido}</td>
      <td>{Dni}</td>
      <td>{Color}</td>
    </tr>
  );
}

export default UsersRow;
