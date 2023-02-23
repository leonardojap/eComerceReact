import "./Home.css";
import { useState, useEffect } from "react";
import { productServices } from "../../Services/Products";
import { Product } from "../../components/Product/Product";
import { Loader } from "../../components/Loader/Loader";

export const Home = () => {
  const [products, setProducs] = useState({});

  useEffect(() => {
    //hacemos la peticion a la api para obtener los productos
    productServices
      .getProducts()
      .then((res) => setProducs(res.data))
      .catch((error) => console.error(error));
  }, []);

  return (
    <>
      <div className="container">
        <div className="row">
          <div className="col-md-12">
            <br />
            <div className="breadcum">
              <h2>Profuctos destacados</h2>
              <div>
                <span className="montoTotal ms-2">Todos los productos /</span>
                <span className="ms-2">Cocina /</span>
                <span className="ms-2">Productos destacados</span>
              </div>
            </div>

            <div
              id="myCarousel"
              className="carousel slide"
              data-ride="carousel"
              data-interval="0"
            >
              {/*carousel items*/}
              <div className="carousel-inner">
                <div className="carousel-item active">
                  <div className="row">
                    {products.length > 0 ? (
                      products.map((product) => (
                        <Product key={product.id} product={product} />
                      ))
                    ) : (
                      <Loader />
                    )}
                  </div>
                </div>
              </div>
              {/*Carousel controls*/}
              <p className="carousel-control-prev" data-slide="prev">
                <i className="fa fa-angle-left"></i>
              </p>
              <p className="carousel-control-next" data-slide="next">
                <i className="fa fa-angle-right"></i>
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
