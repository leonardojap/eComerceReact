import { Rating } from "../Rating/Rating";
import { useDispatch, useSelector } from "react-redux";
import { increment, decrement } from "../../Redux/ShoppingCartSlice";

import { useState, useEffect } from "react";

export const Product = (props) => {
  const { product } = props;
  const [remover, setRemover] = useState(false);
  const dispatch = useDispatch();
  const productos = useSelector((state) => state.shoppingCartSlice.productos);

  useEffect(() => {
    let existe = productos.find((p) => p.id === product.id);
    if (existe) {
      setRemover(true);
    }
  }, [product.id, productos]);

  //agregar al carrito
  const handleAddToCart = () => {
    //agregamos el producto al carrito
    dispatch(increment(product));
    setRemover(true);
  };

  //remover del carrito
  const handleRemoveFromCart = () => {
    //eliminamos el producto del carrito
    dispatch(decrement(product));
    setRemover(false);
  };

  return (
    <>
      <div className="col-sm-3">
        <div className="thumb-wrapper">
          <div className="img-box">
            <img src={product.image} className="img-fluid" alt="" />
          </div>
          <div className="thumb-content">
            <h4>{product.title}</h4>
            <p className="item-price">
              <span>{product.price}€</span>
            </p>

            {/*Puntuacion de estrellas*/}
            <Rating rating={product.rating.rate} />

            <p
              onClick={() =>
                remover
                  ? handleRemoveFromCart(product)
                  : handleAddToCart(product)
              }
              className="btn btn-primary"
            >
              {remover ? "Remover" : "Agregar al carrito"}
            </p>
          </div>
        </div>
      </div>
    </>
  );
};
