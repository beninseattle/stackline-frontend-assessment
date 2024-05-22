/* eslint-disable no-unsafe-optional-chaining */
import { AgGridReact } from "ag-grid-react";
import "ag-grid-community/styles/ag-grid.css"; // Core CSS
import "ag-grid-community/styles/ag-theme-quartz.css"; // Theme
import type { ColDef } from "ag-grid-community";
import type { ProductSale } from "../../features/products/productsAPI";
import "./SalesTable.css";

interface SalesTableProps {
  headers: Array<{ key: string, name: string }>;
  data: ProductSale[]
}

export default function SalesTable({
  headers,
  data
}: SalesTableProps) {
  const mappedData = data.map(sale => ({...sale, weekEnding: new Date(sale.weekEnding)}));
  const columnDefs: ColDef<ProductSale>[] = [
    {
      field: 'weekEnding',
      cellDataType: 'date'
    }, {
      field: 'retailSales',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }, {
      field: 'wholesaleSales',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }, {
      field: 'unitsSold',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }, {
      field: 'retailerMargin',
      cellDataType: 'number',
      valueFormatter: v => (v.data?.retailSales!).toLocaleString("en-US", {style:"currency", currency:"USD", maximumFractionDigits: 0})
    }
  ];
  return (
    <div className="ag-theme-quartz sales_table" style={{ height: 500 }}>
      <AgGridReact rowData={mappedData} columnDefs={columnDefs} />
    </div>
  );
}
