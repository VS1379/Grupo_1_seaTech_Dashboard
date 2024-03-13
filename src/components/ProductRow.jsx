import React from "react";

function ProductRow({ Title, Model, Color, Category }) {
  return (
    <tr>
      <td>{Title}</td>
      <td>{Model}</td>
      <td>{Color}</td>
      <td>
        <ul>
          {Category.map((Category, i) => (
            <li key={`Category ${i}`}>{Category}</li>
          ))}
        </ul>
      </td>
    </tr>
  );
}

export default ProductRow;
