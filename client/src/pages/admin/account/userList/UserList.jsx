import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../../api/userApi";
import { useEffect } from "react";
import { formatDate } from "../../../../helper/formatDate";
import { checkRole } from "../../../../helper/checkRole";

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
      width: 150,
      renderCell: (params) => {
        return (
          <div className="userListItem">
            <img className="userListImg" src={params.row.image} alt="" />
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "username", headerName: "Username", width: 120 },
    {
      field: "role",
      headerName: "Role",
      width: 200,
      renderCell: (params) => {
        return (
          <div className="">{checkRole(params.row.role)}</div>
        );
      },
    },
    {
      field: "created",
      headerName: "Create At",
      width: 170,
      renderCell: (params) => {
        return (
          <div className="">{formatDate(params.row.created)}</div>
        );
      },
    },
    {
      field: "updated",
      headerName: "Update At",
      width: 170,
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
        <Link to="/newuser" className="linkAddUser">
          Add User
        </Link>
      </div>
      <DataGrid
        rows={user}
        disableSelectionOnClick
        columns={columns}
        pageSize={10}
        checkboxSelection
        autoHeight
      />
    </div>
  );
}
