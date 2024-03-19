import React from "react";

function CategoriesRow({ Categories }) {
  return (
    <tr>
      <td>
        {Categories.map((Categoria) => {
          return (
            <tr>
              <td>{Categoria}</td>
            </tr>
          );
        })}
      </td>
    </tr>
  );
}

export default CategoriesRow;
