import React from "react";
import { useParams } from "react-router-dom";

function ProductsCategory() {
  const params = useParams();
  return (
    <div>
      <h2>Estamos en Products Category: {params.category}</h2>
    </div>
  );
}

export default ProductsCategory;
