import React from "react";
import ProductDetail from "./ProductDetail";
function ProductRow({ id, name, price, year, description }) {
  return (
    <tr>
      <td>{name}</td>
      <td>{price}</td>
      <td>{year}</td>
      <td>{description}</td>
      <td>
        {/* <ul>
          {Category.map((Category, i) => (
            <li key={`Category ${i}`}>{Category}</li>
          ))}
        </ul> */}
      </td>
      <td>
        <button>
          <a
            className="btn"
            target="_blank"
            rel="nofollow"
            href={"/ProductDetail/" + id}
          >
            Detalle del producto
          </a>
        </button>
      </td>
    </tr>
  );
}

export default ProductRow;
