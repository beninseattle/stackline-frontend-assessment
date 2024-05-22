export interface Product {
  id: string;
  title: string;
  image: string;
  subtitle: string;
  brand: string;
  reviews: ProductReview[];
  retailer: string;
  details: string[];
  tags: string[];
  sales: ProductSale[];
}
interface ProductReview {
  customer: string;
  review: string;
  score: number;
}
export interface ProductSale {
  weekEnding: string;
  retailSales: number;
  wholesaleSales: number;
  unitsSold: number;
  retailerMargin: number;
}

export type ProductSaleDates = Omit<ProductSale, 'weekEnding'> & { weekEnding: Date };

const STACKLINE_DEMO_DATA_FILE = 'stackline_frontend_assessment_data_2021.json';
export const fetchProducts = async () => {
  const response = await fetch(`/${STACKLINE_DEMO_DATA_FILE}`);
  return await response.json() as Promise<Product[]>;
}
