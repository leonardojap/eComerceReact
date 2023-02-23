import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
// ************ Components ************
import { Header } from "./components/Header/Header";
// ************ Pages ****************
import { Home } from "./pages/Home/Home";
import { ShoppingCart } from "./pages/ShoppingCart/ShoppingCart";

//para el manejo global de estados
import { store } from "./Redux/Store";
import { Provider } from "react-redux";

function App() {
  return (
    <>
      {/*Manejo de estado global*/}
      <Provider store={store}>
        {/* navegacion con reacxt router Dom */}
        <BrowserRouter>
          <Header />
          <Routes>
            {/* Showcase */}
            <Route path="/" element={<Home />} />
            {/* Shopping Cart */}
            <Route path="/shopping-cart" element={<ShoppingCart />} />
          </Routes>
        </BrowserRouter>
      </Provider>
    </>
  );
}

export default App;
