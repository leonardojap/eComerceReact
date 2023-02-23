import "./ShoppingCart.css";
import { useSelector } from "react-redux";
import { BackHomeBtn } from "../../components/BackHomeBtn/BackHomeBtn";
import { ItemCarrito } from "../../components/ItemCarrito/ItemCarrito";

export const ShoppingCart = () => {
  const productos = useSelector((state) => state.shoppingCartSlice.productos);
  const montoTotal = useSelector((state) => state.shoppingCartSlice.montoTotal);

  return (
    <>
      <div className="container">
        <br />
        <br />
        <div className="row">
          <BackHomeBtn />
          <div className="col-8">
            <table className="table table-bordered">
              <tr>
                <th className="titleTableCarrito">CARRITO</th>
              </tr>

              <tbody>
                {productos.length > 0 ? (
                  productos.map((producto) => (
                    <ItemCarrito key={producto.id} producto={producto} />
                  ))
                ) : (
                  <tr>
                    <td>
                      <p className="titleResume">
                        No hay productos en el carrito
                      </p>
                    </td>
                  </tr>
                )}
              </tbody>
            </table>
          </div>
          <div className="col-4">
            <table className="table table-bordered">
              <tr>
                <th>
                  <div className="tituloDetalle">
                    <p className="titleResume">
                      {productos.length}{" "}
                      {productos.length === 1 ? "Articulo" : "Articulos"}
                    </p>
                    <p className="titleResumeTotal">{montoTotal.toFixed(2)}€</p>
                  </div>
                </th>
              </tr>

              <tbody>
                <tr>
                  <td>
                    <div className="btnFinalizarCompra">Finalizar Compra</div>
                  </td>
                </tr>
              </tbody>
            </table>
            <br />
            <div className="tituloDetalle">
              <p className="titleDescuento">Codigo de descuento</p>
              <input className="inputDescuento" type="text" />
              <div className="btnDescuento">APLICAR</div>
            </div>
          </div>
          <BackHomeBtn />
        </div>
      </div>
    </>
  );
};
