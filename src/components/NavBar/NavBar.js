import "./NavBar.css";
import logo from "../../assets/img/logo.png";
import shoppingcart from "../../assets/img/carrito.jpg";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export const NavBar = (props) => {
  const productos = useSelector((state) => state.shoppingCartSlice.productos);
  const montoTotal = useSelector((state) => state.shoppingCartSlice.montoTotal);
  return (
    <>
      <div className="menu">
        <Link to="/" className="decoration">
          <img src={logo} alt="" />
        </Link>
        {/*seccion de carrito*/}
        <div className="carrito">
          <div className="btnCarrito">
            <img className="icon-carrito" src={shoppingcart} alt="" />
            <div className="badgeCarrito">{productos.length}</div>
          </div>
          <Link to="/shopping-cart" className="decoration">
            <div className="precioCarrito">
              <p className="montoTotal">{montoTotal.toFixed(2)} €</p>
              <p>Mi Carrito</p>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};
