import { useEffect, useRef } from "react";
import LineChart from '../../charts/LineChart';
import "./SalesChart.css";
import type { ProductSale } from "../../features/products/productsAPI";

interface SalesChartProps {
  title: string;
  data: ProductSale[]
}

let ChartInitialized = false;
export default function SalesChart({
  title,
  data
}: SalesChartProps) {
  const chartRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if(chartRef && chartRef.current && !ChartInitialized) {
      const mappedData = data.map(sale => ({...sale, weekEnding: new Date(sale.weekEnding)}));
      LineChart(chartRef.current, mappedData, 'retailSales');
      ChartInitialized = true;
    }
  }, [data]);

  return (
    <div className="sales_chart card">
      <div className="sales_chart_title">{title}</div>
      <div className='product_chart' ref={chartRef} />
    </div>
  )
}