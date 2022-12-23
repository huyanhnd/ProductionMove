import "./userList.css";
import { DataGrid } from "@mui/x-data-grid";
import { DeleteOutline } from "@mui/icons-material";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getUsers, deleteUser } from "../../../../api/userApi";
import { useEffect } from "react";

export default function UserList() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  const handleDelete = (id) => {
    deleteUser(id, dispatch);
  };

  const createdDate = (created) => {
    let options = {
      year: "numeric",
      month: "numeric",
      day: "numeric",
      hour: "numeric",
      minute: "numeric",
      second: "numeric",
      hour12: false,
      timeZone: "Asia/Ho_Chi_Minh",
    };
    const date = new Date(created);
    console.log(new Intl.DateTimeFormat("en-US", options).format(date));
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
            <img className="userListImg" src={params.row.img} alt="" />
            {params.row.fullName}
          </div>
        );
      },
    },
    { field: "username", headerName: "Username", width: 120 },
    { field: "role", headerName: "Role", width: 120 },
    {
      field: "created",
      headerName: "Create At",
      width: 200,
      renderCell: (params) => {
        return (
          <>
            <div className="">{createdDate(params.row.created)}</div>
          </>
        );
      },
    },
    { field: "updated", headerName: "Update At", width: 90 },
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
