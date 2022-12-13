import "./productLineList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { getProductLines, deleteProductLine } from "../../api/productLineApi";

export default function ProductLineList() {
  const dispatch = useDispatch();
  const productline = useSelector((state) => state.productline.productlines);

  useEffect(() => {
    getProductLines(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteProductLine(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 50},
    { field: "name", headerName: "Name"},
    { field: "seriesId", headerName: "SeriesId", width: 50 },
    { field: "screenSize", headerName: "ScreenSize", width: 90 },
    { field: "resolution", headerName: "Resolution", width: 90 },
    { field: "processor", headerName: "Processor", width: 90 },
    { field: "memory", headerName: "Memory", width: 90 },
    { field: "hardware", headerName: "HardWare", width: 90 },
    { field: "graphics", headerName: "Graphics", width: 90 },
    { field: "listPrice", headerName: "ListPrice", width: 90 },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/productLine/" + params.row.id}>
              <button className="productLineListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="productLineListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="productLineList">
      <DataGrid
        rows={productline}
        disableSelectionOnClick
        getRowId={(row) => row.id} 
        columns={columns}
        pageSize={8}
        checkboxSelection
      />
    </div>
  );
}
