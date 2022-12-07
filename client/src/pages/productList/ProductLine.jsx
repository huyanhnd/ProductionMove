import "./productLine.css";
import { DataGrid } from "@mui/x-data-grid";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLine, deleteProductLine } from "../../redux/apiCalls";
import { Link } from "react-router-dom";
import { DeleteOutline } from "@mui/icons-material";

export default function ProductList() {
  const dispatch = useDispatch();
  const productline = useSelector((state) => state.productline.productline);
  useEffect(() => {
    getProductLine(dispatch);
  }, [dispatch]);

  const handleDelete = (code) => {
    deleteProductLine(code, dispatch);
  };

  const columns = [

    { field: "code", headerName: "CODE", width: 90 },
    {
      field: "name",
      headerName: "NAME",
      width: 200,
    },
    { field: "seriesId", headerName: "SeriesId", width: 90 },
    { field: "screenSize", headerName: "ScreenSize", width: 90 },
    { field: "resolution", headerName: "Resolution", width: 90 },
    { field: "processor", headerName: "Processor", width: 90 },
    { field: "memory", headerName: "Memory", width: 90 },
    { field: "hardware", headerName: "Hardware", width: 90 },
    { field: "graphics", headerName: "Graphics", width: 90 },
    { field: "listPrice", headerName: "ListPrice", width: 90 },
    // {
    //   field: "price",
    //   headerName: "Price",
    //   width: 160,
    // },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.code}>
              <button className="productListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productListDelete"
              onClick={() => handleDelete(params.row.code)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productList">
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
