import "./ItemCarrito.css";

import { useDispatch } from "react-redux";
import { decrement } from "../../Redux/ShoppingCartSlice";

export const ItemCarrito = (props) => {
  const { producto } = props;
  const dispatch = useDispatch();

  //remover del carrito
  const handleRemoveFromCart = () => {
    //eliminamos el producto del carrito
    dispatch(decrement(producto));
  };

  return (
    <>
      <tr>
        <td>
          <div className="itemCarrito">
            <img className="ingCarrito" src={producto.image} alt="" />
            <p className="nameProducto datacarrito">{producto.title}</p>
            <p className="datacarrito priceCarrito">{producto.price}€</p>
            <i className="fa fa-trash trash" onClick={handleRemoveFromCart}></i>
          </div>
        </td>
      </tr>
    </>
  );
};
