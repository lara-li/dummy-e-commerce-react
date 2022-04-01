import "./styles/shared.css";
import "./styles/product.css";

function ProductLanding() {
  function moveImage(e) {
    const mainImg = document.querySelector(".main-img");
    const imgId = e.currentTarget.getAttribute("id");
    const clickImgSrc = `./images/image-product-${imgId}.jpg`;
    mainImg.setAttribute("src", clickImgSrc);
  }
  return (
    <section className="product">
      <div className="product__gallery">
        <img className="main-img" src="images/image-product-1.jpg" alt="" />
        <div className="thumbnail-imgs">
          <img
            id="1"
            src="images/image-product-1-thumbnail.jpg"
            alt=""
            onClick={moveImage}
          />
          <img
            id="2"
            src="images/image-product-2-thumbnail.jpg"
            alt=""
            onClick={moveImage}
          />
          <img
            id="3"
            src="images/image-product-3-thumbnail.jpg"
            alt=""
            onClick={moveImage}
          />
          <img
            id="4"
            src="images/image-product-4-thumbnail.jpg"
            alt=""
            onClick={moveImage}
          />
        </div>
      </div>
      <article className="product__text">
        <h4 className="product__text-companyname"> Sneaker Company</h4>
        <h1 className="product__heading">Fall Limited Edition Sneakers</h1>
        <p className="product__description">
          These low-profile sneakers are your perfect casual wear companion.
          Featuring a durable rubber outer sole, they’ll withstand everything
          the weather can offer.{" "}
        </p>
        <div className="product__price-container">
          <span className="product__price">$125.00</span>
          <span className="discount-box"> 50%</span>
        </div>
        <p className="product__old-price">$250.00</p>
        <div className="product__checkout-part">
          <button className="input-btn-decrease">-</button>
          <input
            className="product__input"
            type="number"
            name="product-amount"
            id="input-count"
            placeholder="0"
          />
          <button className="input-btn-increase">+</button>

          <button className=" product__form-btn">Add to cart</button>
        </div>
      </article>
    </section>
  );
}
export default ProductLanding;
