import { useEffect } from "react"
import { useAppDispatch, useAppSelector } from "../../app/hooks"
import "./Products.css"
import { loadProducts, products, productsLoaded } from "./productsSlice"
import ProductDetail from "../../components/ProductDetail/ProductDetail"
import SalesChart from "../../components/SalesChart/SalesChart"
import SalesTable from "../../components/SalesTable/SalesTable"

export default function Products() {
  const dispatch = useAppDispatch();
  const productData = useAppSelector(products);
  const loaded = useAppSelector(productsLoaded);

  useEffect(() => {
    if (!loaded) {
      dispatch(loadProducts())
    }
  }, []);

  if (!loaded) {
    return <div>Products loading...</div>;
  }

  return (
    <div className="products_list">
      {productData.map(({ id, image, title, subtitle, tags, sales }) => (
        <div className="product" key={id}>
          <ProductDetail
            image={image}
            title={title}
            subtitle={subtitle}
            tags={tags}
          />
          <div className="report">
            <SalesChart title="Retail Sales" data={sales}/>
            <SalesTable headers={Object.keys(sales[0]).map(key => ({ key, name: key }))} data={sales}/>
          </div>
        </div>
      ))}
      {productData.length} Products loaded!
    </div>
  );
}
