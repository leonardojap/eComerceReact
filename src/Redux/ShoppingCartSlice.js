import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  productos: JSON.parse(localStorage.getItem("productos")) || [],
  montoTotal: parseFloat(localStorage.getItem("montoTotal")) || 0,
};

export const shoppingCartSlice = createSlice({
  name: "shoppingCartSlice",
  initialState,
  reducers: {
    increment: (state, action) => {
      //push al arreglo de productos en carrito
      state.productos = [...state.productos, action.payload];
      //sumamos el monto total
      state.montoTotal = state.montoTotal + action.payload.price;
      localStorage.setItem("productos", JSON.stringify(state.productos));
      localStorage.setItem("montoTotal", state.montoTotal);
    },
    decrement: (state, action) => {
      state.productos = state.productos.filter(
        (producto) => producto.id !== action.payload.id
      ); //eliminamos el producto del carrito

      //restamos el monto total
      state.montoTotal = state.montoTotal - action.payload.price;
      localStorage.setItem("productos", JSON.stringify(state.productos));
      localStorage.setItem("montoTotal", state.montoTotal);
    },
  },
});

// Action creators are generated for each case reducer function
export const { increment, decrement } = shoppingCartSlice.actions;

export default shoppingCartSlice.reducer;
