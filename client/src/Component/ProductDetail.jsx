import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  const { product_id } = useParams(); // grabs product id from URL
  const [product, setProduct] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const res = await axios.get(`http://localhost:5000/products/${product_id}`);
        console.log("Fetched product:", res);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
      }
    };

    fetchProduct();
  }, [product_id]);

  if (!product) return <p className="p-6">Loading...</p>;

  return (
    <div className="container pt-5 mt-5">
      <div className="row">
        <h2 className="fw-bold text-center">{product.product_name}</h2>
        <div className="col-md-6 text-center">
          <img
            src={product.product_image_url}
            alt={product.product_name}
            className="img-fluid rounded shadow"
            style={{ maxHeight: "400px" }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-center text-center ">
          <h2 className="fw-bold">{product.product_name}</h2>
          <p className="text-muted">{product.product_brief_description}</p>
          <p className="text-muted">{product.product_full_description}</p>
          <p className="text-muted ">{product.starting_price}</p>

          <p className="text-muted">{product.price_range}</p>
        </div>
      </div>
    </div>
  );
};

export default ProductDetail;
