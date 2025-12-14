import React from "react";
import { useGetAllProductsQuery } from "../apis/productAPi";
import { useDispatch } from "react-redux";
import { addToCart } from "../features/cart/cartSlice";
import styles from "./product.module.css";
import CartIcon from "./cartIcon";
import {Link} from "react-router"

// after getting the array returned from api...we are display the products
const Products = () => {
  const data = useGetAllProductsQuery();
  const dispatch = useDispatch();
  console.log(data.data);

  // Add this handler function for button event
  const handleAddToCart = (product) => {
    console.log("Full product object:", product);
    dispatch(
      addToCart({
        id: product.id,
        name: product.title,
        price: product.price,
        image: product.image,
      })
    );
  };

//   const singleProduct = (e) => {
//     let nu = e.target.parentElement.parentElement.getAttribute("id") - 1;
//     return nu;
//   };

  return (
    <>
      <div
        style={{ display: "flex", justifyContent: "flex-end", padding: "20px" }}
      >
        <CartIcon />
      </div>
      <div className={styles.productContainer}>
        {data?.data?.map((product) => (
          <div key={product.id}>

            <Link to={`/products/${product.id}`}>
                <button className={styles.imageButton}>
                    <img
                    className={styles.productImage}
                    src={product.image}
                    alt="product image"
                    />
                </button>
            </Link>

            <h1 className={styles.productTitle}>{product.title}</h1>
            <h2 className={styles.productCategory}>{product.category}</h2>
            <p>${product.price}</p>
            <button
              className={styles.button}
              onClick={() => handleAddToCart(product)} // Add onClick handler
            >
              Add to cart
            </button>
          </div>
        ))}
      </div>
    </>
  );
};

export default Products;
