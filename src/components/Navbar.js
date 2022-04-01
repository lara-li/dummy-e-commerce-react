import "./styles/shared.css";
import "./styles/navbar.css";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <header>
      <nav className="navbar flex">
        <div className="navbar-left-side flex ">
          <Link to="/">
            <img
              className="navbar__logo"
              src="/images/logo.svg"
              alt="sneakers-logo"
            />
          </Link>
          <ul className="navbar__links flex">
            <Link to='/'>
              
              <li className="navbar__link">Collections</li>
            </Link>
            <Link to='/'>
             
              <li className="navbar__link">Women</li>
            </Link>
            <Link to='/'>
             
              <li className="navbar__link">Men</li>
            </Link>
            <Link to='/'>
             
              <li className="navbar__link">About</li>
            </Link>
            <Link to='/'>
             
              <li className="navbar__link">Contact</li>
            </Link>
          </ul>
        </div>
        <div className="navbar-right-side flex ">
          <img
            className="navbar__icon--cart"
            src="/images/icon-cart.svg"
            alt="cart"
          />
          <img
            className="navbar__img--customer"
            src="/images/image-avatar.png"
            alt="cart"
          />
        </div>
      </nav>
      <aside className="hamburger-icon flex">
        <div></div>
        <div></div>
        <div></div>
      </aside>

      <section className="dropdown-nav">
        <ul className="dropdown__links">
          <Link to="/">
            <li className="dropdown__link ">Collections</li>
          </Link>
          <Link to="/">
            <li className="dropdown__link ">Women</li>
          </Link>
          <Link to="/">
            <li className="dropdown__link ">Men</li>
          </Link>
          <Link to="/">
            <li className="dropdown__link ">About</li>
          </Link>
          <Link to="/">
            <li className="dropdown__link ">Contact</li>
          </Link>
        </ul>
      </section>
    </header>
  );
}
export default Navbar;
