import "./factory.css";
import { DataContext } from "./Factory";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";


export default function FactoryList() {
  const dataContext = useContext(DataContext)
  // console.log("re-render")

  const [data, setData] = useState(dataContext);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
    
  };

  useEffect(()=>setData(dataContext),[useContext(DataContext)])

  const columns = [
    { field: "code", headerName: "No.", width: 90 },
    {
      field: "name",
      headerName: "Factory Name",
      width: 200,
    },
    { field: "wardId", headerName: "Ward ID", width: 200 },
    {
      field: "address",
      headerName: "Address",
      width: 350,
      renderCell: (params) => {
        return (
          <>
            <div className="factoryAddress">
            {params.row.address}
            </div>
          </>
        );
      },
    },
    {
      field: "action",
      headerName: "Action",
      width: 150,
      renderCell: (params) => {
        return (
          <>
            <Link to={"/product/" + params.row.id}>
              <button className="factoryListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="factoryListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
      <DataGrid
        getRowId={(row) => row.code} 
        rows={data}
        disableSelectionOnClick
        columns={columns}
        pageSize={data.length}
        checkboxSelection
      />
  );
}
