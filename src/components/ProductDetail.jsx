import React from "react";
import { useParams } from "react-router-dom";

function ProductDetail() {
  const params = useParams();
  return (
    <div>
      <h2>Estamos en Product detail: {params.productDetail}</h2>
    </div>
  );
}

export default ProductDetail;
