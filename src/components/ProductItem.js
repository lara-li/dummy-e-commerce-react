import "./styles/shared.css";
import "./styles/product-item.css";
import "./styles/product.css";
import { Link } from "react-router-dom";

function ProductItem() {
  return (
    <article className="product-item">
      <img
        className="product-item__img"
        src="../images/image-product-1.jpg"
        alt="product-img"
      />
      <h2>Fall Limited Edition Sneakers</h2>
      <div className="product__price-container">
        <span className="product__price"> $125.00</span>
        <span className="discount-box"> 50%</span>
      </div>
      <p className="product__old-price"> $250.00</p>
      <Link to="/product1">
        <a href="/" className=" product__form-btn">
          Go to Item
        </a>
      </Link>
    </article>
  );
}
export default ProductItem;
