import "./factory.css";
import { DataContext } from "./Factory";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getFactory } from "../../api/factoryApi";


export default function FactoryList() {

  const dispatch = useDispatch();
  const provinceCode = useSelector((state) => state.address.provinceCode)
  const districtCode = useSelector((state) => state.address.districtCode)
  const wardCode = useSelector((state) => state.address.wardCode)
  console.log(provinceCode);
  console.log(districtCode);
  console.log(wardCode);

  // useEffect(() => {
  //   getFactory(dispatch, provinceCode, districtCode, wardCode);
  // }, [provinceCode,districtCode,wardCode]);
// var factory={}
  const factory = useSelector((state) => state.factory.factory.items);
  console.log(' ');
  console.log(factory);

  // const dataContext = useContext(DataContext)
  // console.log("re-render")

  const [data, setData] = useState(factory);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));

  };

  // useEffect(()=>setData(dataContext),[useContext(DataContext)])

  const columns = [
    { field: "id", headerName: "No.", width: 90 },
    { field: "name", headerName: "Factory Name", width: 200 },
    { field: "wardCode", headerName: "Ward Code", width: 200 },
    { field: "districtCode", headerName: "District Code", width: 200 },
    { field: "provinceCode", headerName: "Province Code", width: 200 },
    { field: "address", headerName: "Address", width: 350 },
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
      rows={factory}
      disableSelectionOnClick
      columns={columns}
      pageSize={100}
      checkboxSelection
    />
  );
}
