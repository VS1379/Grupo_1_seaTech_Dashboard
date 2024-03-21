import React from "react";

function CategoriesRow({ name }) {
  return (
    <tr>
      <td class="text-center display-4">{name}</td>
    </tr>
  );
}

export default CategoriesRow;
