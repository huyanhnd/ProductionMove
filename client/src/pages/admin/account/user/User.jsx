import {
  CalendarToday,
  LocationSearching,
  MailOutline,
  PermIdentity,
  PhoneAndroid,
  Publish,
  Man
} from "@mui/icons-material";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { getUsers } from "../../../../api/userApi";
import "./user.css";

export default function User() {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.user.users);

  useEffect(() => {
    getUsers(dispatch);
  }, [dispatch]);

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
        <Link to="/newUser">
          <button className="userAddButton">Create</button>
        </Link>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img
              src="https://firebasestorage.googleapis.com/v0/b/productionmove-3cd59.appspot.com/o/1671172307669roberto-nickson-Gvm2wM3V5PA-unsplash.jpg?alt=media&token=4e9bcb67-6160-4074-9850-ce734b3c6a92"
              alt=""
              className="userShowImg"
            />
            <div className="userShowTopTitle">
              {/* <span className="userShowUsername">{user.fullname}</span> */}
              <span className="userShowUserTitle">Fullname</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">username</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">created</span>
            </div>
            {/* <span className="userShowTitle">Description Details</span> */}
            <div className="userShowInfo">
              <Man className="userShowIcon" />
              <span className="userShowInfoTitle">Role</span>
            </div>
            {/* <div className="userShowInfo">
              <MailOutline className="userShowIcon" />
              <span className="userShowInfoTitle">annabeck99@gmail.com</span>
            </div>
            <div className="userShowInfo">
              <LocationSearching className="userShowIcon" />
              <span className="userShowInfoTitle">New York | USA</span>
            </div> */}
          </div>
        </div>
        <div className="userUpdate">
          <span className="userUpdateTitle">Edit</span>
          <form className="userUpdateForm">
            <div className="userUpdateLeft">
              <div className="userUpdateItem">
                <label>Username</label>
                <input
                  type="text"
                  placeholder="username"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="fullname"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Email</label>
                <input
                  type="text"
                  placeholder="annabeck99@gmail.com"
                  className="userUpdateInput"
                />
              </div>
              <div className="userUpdateItem">
                <label>Role</label>
                <select className="selectRole">
                  <option value="manufacture">Admin</option>
                  <option value="store">Factory</option>
                  <option value="sold">Store</option>
                  <option value="error">ServiceCenter</option>
                </select>
              </div>
              {/* <div className="userUpdateItem">
                <label>Address</label>
                <input
                  type="text"
                  placeholder="New York | USA"
                  className="userUpdateInput"
                />
              </div> */}
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  src="https://firebasestorage.googleapis.com/v0/b/productionmove-3cd59.appspot.com/o/1671172307669roberto-nickson-Gvm2wM3V5PA-unsplash.jpg?alt=media&token=4e9bcb67-6160-4074-9850-ce734b3c6a92"
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input type="file" id="file" style={{ display: "none" }} />
              </div>
              <button className="userUpdateButton">Update</button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
