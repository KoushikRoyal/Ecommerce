import { useEffect, useState } from "react";
import "./ListProduct.css";
import cross_icon from '../../assets/cross_icon.png';

const ListProduct = () => {
  const [allproducts, setAllproducts] = useState([]);

  const fetchInfo = async () => {
    try {
      const res = await fetch("http://localhost:4000/allproducts");
      const data = await res.json();
      setAllproducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchInfo();
  }, []);

  return (
    <div className="list-product">
      <h1>All Products List</h1>
      <div className="listproduct-format-main">
        <p>Products</p>
        <p>Title</p>
        <p>Old Price</p>
        <p>New Price</p>
        <p>Category</p>
        <p>Remove</p>
      </div>
      <div className="listproduct-allproducts">
        <hr />
        {allproducts.map((product, index) => (
          <div key={product.id || index} className="listproduct-format-main">
            <img
              src={product.image}
              alt={product.name || "Product image"}
              className="listproduct-product-icon"
            />
            <p>{product.name}</p>
            <p>${product.old_price}</p>
            <p>${product.new_price}</p>
            <p>{product.category}</p>
            <img
              src={cross_icon}
              alt="Remove product"
              className="listproduct-remove-icon"
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ListProduct;
