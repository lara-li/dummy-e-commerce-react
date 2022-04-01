import Navbar from "../components/Navbar";
import ProductItem from "../components/ProductItem";

function MainPage() {
  return (
    <body>
      <Navbar />
      <div className="products">
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />
        <ProductItem />

      </div>
    </body>
  );
}
export default MainPage;
