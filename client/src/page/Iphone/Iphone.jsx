import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axiosInstance from "../../util/axiosInstance";
import 'bootstrap/dist/css/bootstrap.min.css';



const Iphone = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const res = await axiosInstance.get("/products");
        console.log("Fetched products:", res);
        setProducts(res.data);
      } catch (err) {
        console.error("Error fetching products:", err);
      }
    };

    fetchProducts();
  }, []);
  console.log("Products state:", products);
   
  return (
    <div className="container pt-5 mt-5 my-5">
      {products.map((product, index) => (
        <div
          className={`row align-items-center mb-5 ${
            index % 2 === 1 ? "flex-row-reverse" : ""
          }`}
          key={product.product_id}
        >
          {/* Image Section */}
          <div className="col-md-6 text-center">
            <img
              src={product.product_image_url}
              alt={product.product_name}
              className="img-fluid rounded shadow"
              style={{ maxHeight: "400px" }}
            />
          </div>

          {/* Text Section */}
          <div className="col-md-6 d-flex flex-column justify-content-center text-center ">
            <h2 className="fw-bold">{product.product_name}</h2>
            <p className="text-muted">{product.product_brief_description}</p>
            <p className="text-muted ">{product.starting_price}</p>

            <p className="text-muted">{product.price_range}</p>
            <Link
              to={`/iphone/${product.product_id}`}
              className="text-blue-500 underline mt-2 inline-block"
            >
              Learn More
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Iphone;
