import { useState, useEffect } from "react"

import { useAppDispatch, useAppSelector } from "../../app/hooks"
import styles from "./Product.module.css"
import {
  loadProducts,
  products,
  productsLoaded
} from "./productsSlice";

export const Product = () => {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(products);
  const loaded = useAppSelector(productsLoaded);

  useEffect(() => {
    console.log('product use effect run');
    if (!loaded) {
      console.log('products not loaded, dispatch \'loadProducts\'');
      dispatch(loadProducts());
    }
  })

  if (!loaded) {
    return (
      <div>No products loaded</div>
    )
  }

  return (
    <div>
      {productData.length} Products loaded!
    </div>
  )
}
