import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axiosInstance from "../util/axiosInstance";
import 'bootstrap/dist/css/bootstrap.min.css';

const ProductDetail = () => {
  const { product_id } = useParams(); // grabs product id from URL
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProduct = async () => {
      setLoading(true);
      setError(null);
      try {
        const res = await axiosInstance.get(`/products/${product_id}`);
        console.log("Fetched product:", res);
        setProduct(res.data);
      } catch (err) {
        console.error("Error fetching product:", err);
        if (err.response?.status === 404) {
          setError("Product not found.");
        } else {
          setError("Failed to load product. Please try again later.");
        }
      } finally {
        setLoading(false);
      }
    };

    fetchProduct();
  }, [product_id]);

  if (loading) {
    return (
      <div className="container pt-5 mt-5">
        <div className="text-center">
          <p className="p-6">Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="container pt-5 mt-5">
        <div className="text-center">
          <p className="p-6 text-danger">{error}</p>
        </div>
      </div>
    );
  }

  if (!product) {
    return null;
  }

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
