import "./productLineList.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLine } from "../../redux/apiCalls";

export default function ProductLineList() {
  const dispatch = useDispatch();
  const productline = useSelector((state) => state.productline.productline);
  useEffect(() => {
    getProductLine(dispatch);
  }, [dispatch]);

  const columns = [
    { field: "code", headerName: "CODE", width: 70},
    { field: "name", headerName: "NAME", width: 150 },
    { field: "seriesId", headerName: "SeriesId", width: 50 },
    { field: "screenSize", headerName: "ScreenSize", width: 90 },
    { field: "resolution", headerName: "Resolution", width: 90 },
    { field: "processor", headerName: "Processor", width: 90 },
    { field: "memory", headerName: "Memory", width: 90 },
    { field: "hardware", headerName: "HardWare", width: 90 },
    { field: "graphics", headerName: "Graphics", width: 90 },
    { field: "listPrice", headerName: "ListPrice", width: 90 },
  ];

  return (
    <div className="productList">
      {console.log(productline.items)}
      <DataGrid
        getRowId={(row) => row.code} 
        rows={productline.items}
        disableSelectionOnClick
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
