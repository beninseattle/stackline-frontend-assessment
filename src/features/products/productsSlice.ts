import { createAppSlice } from "../../app/createAppSlice"
import { fetchProducts } from "./productsAPI"
import type { Product } from "./productsAPI";

export interface ProductsSliceState {
  data: Product[];
  loaded: "no" | "loading" | "yes" | "failed"
}

const initialState: ProductsSliceState = {
  data: [],
  loaded: "no",
}

export const productsSlice = createAppSlice({
  name: "products",
  initialState,
  reducers: create => ({
    loadProducts: create.asyncThunk(
      async () => {
        const products = await fetchProducts()
        return products;
      },
      {
        pending: state => {
          state.loaded = "loading"
        },
        fulfilled: (state, action) => {
          state.loaded = "yes"
          state.data = [...action.payload]
        },
        rejected: state => {
          state.loaded = "failed"
        },
      },
    ),
  }),
  selectors: {
    products: state => state.data,
    productsLoaded: state => state.loaded === 'yes',
  },
})

export const { loadProducts } = productsSlice.actions
export const { products, productsLoaded } = productsSlice.selectors
