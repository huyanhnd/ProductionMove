import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../../api/userApi";
import { useEffect } from "react";
import { formatDate } from "../../../../helper/formatDate";

export default function UserList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const columns = [
    { field: "id", headerName: "Id", width: 50 },
    {
      field: "User",
      headerName: "FullName",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="userListItem">
            {/* src={params.row.image} */}
            <img className="userListImg" src="https://firebasestorage.googleapis.com/v0/b/productionmove-3cd59.appspot.com/o/1671172307669roberto-nickson-Gvm2wM3V5PA-unsplash.jpg?alt=media&token=4e9bcb67-6160-4074-9850-ce734b3c6a92" alt="" />
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "username", headerName: "Username", width: 90 },
    { field: "role", headerName: "Role", width: 90 },
    {
      field: "created",
      headerName: "Create At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="">{formatDate(params.row.created)}</div>
        );
      },
    },
    {
      field: "updated",
      headerName: "Update At",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="">{params.row.updated === null ? "Undefine" : formatDate(params.row.updated)}</div>
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
            <Link to={"/user/" + params.row.id}>
              <button className="userListEdit">Edit</button>
            </Link>
            <DeleteOutline
              className="userListDelete"
              onClick={() => handleDelete(params.row.id)}
            />
          </>
        );
      },
    },
  ];

  return (
    <div className="userList">
      <div className="datatableTitle">
        Users
        <Link to="/factory-warehouse/addproducts" className="linkAddProduct">
          Add Product
        </Link>
      </div>
      <DataGrid
        rows={user}
        disableSelectionOnClick
        columns={columns}
        pageSize={7}
        checkboxSelection
      />
    </div>
  );
}
