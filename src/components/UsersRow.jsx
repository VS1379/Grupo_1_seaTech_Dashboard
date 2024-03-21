import React from "react";

function UsersRow({
  id,
  first_name,
  last_name,
  phone,
  email,
  address,
  province,
  rol,
}) {
  return (
    <tr>
      <td>{first_name}</td>
      <td>{last_name}</td>
      <td>{phone}</td>
      <td>{email}</td>
      <td>{address}</td>
      <td>{province}</td>
      <td>{rol>1?"Adm":"C/V"}</td>
      <td>
        <button>
          <a
            className="btn"
            target="_blank"
            rel="nofollow"
            href={"/UserDetail/" + id}
          >
            Detalle de la persona
          </a>
        </button>
      </td>
    </tr>
  );
}

export default UsersRow;
