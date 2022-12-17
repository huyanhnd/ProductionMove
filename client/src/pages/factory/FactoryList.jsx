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

  // useEffect(() => {
  //   getFactory(dispatch, provinceCode, districtCode, wardCode);
  // }, [provinceCode,districtCode,wardCode]);
  // var factory={}
  const factory = useSelector((state) => state.factory.factories);
  const province = useSelector((state) => state.address.province)
  // const dataContext = useContext(DataContext)

  const [data, setData] = useState(factory);
  const handleDelete = (id) => {
    setData(data.filter((item) => item.id !== id));
  };


  const columns = [
    { field: "id", headerName: "No.", width: 50 },
    { field: "name", headerName: "Factory Name", width: 200 },
    { field: "address", headerName: "Address", width: 450 },
    {
      field: "action", headerName: "Action", width: 150,
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
