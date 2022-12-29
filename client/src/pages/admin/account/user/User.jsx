import { CalendarToday, PermIdentity, Publish, Man } from "@mui/icons-material";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { formatDate } from "../../../../helper/formatDate";
import app from "../../../../firebase";
import {
  getStorage,
  ref,
  uploadBytesResumable,
  getDownloadURL,
} from "firebase/storage";
import "./user.css";
import { updateUser } from "../../../../api/userApi";

export default function User() {
  const location = useLocation();
  const userId = location.pathname.split("/")[2];

  const user = useSelector((state) => state.user.users);
  const selectUser = user.find((u) => u.id == userId);

  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({ role: "Factory" });
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    // document.getElementById('username').change(enableBtn);
    setInputs((prev) => {
      return { ...prev, [e.target.name]: e.target.value };
    });
  };

  const handleClick = (e) => {
    e.preventDefault();
    const fileName = new Date().getTime() + file.name;
    const storage = getStorage(app);
    const storageRef = ref(storage, fileName);
    const uploadTask = uploadBytesResumable(storageRef, file);

    // Register three observers:
    // 1. 'state_changed' observer, called any time the state changes
    // 2. Error observer, called on failure
    // 3. Completion observer, called on successful completion
    uploadTask.on(
      "state_changed",
      (snapshot) => {
        // Observe state change events such as progress, pause, and resume
        // Get task progress, including the number of bytes uploaded and the total number of bytes to be uploaded
        const progress =
          (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
        console.log("Upload is " + progress + "% done");
        switch (snapshot.state) {
          case "paused":
            console.log("Upload is paused");
            break;
          case "running":
            console.log("Upload is running");
            break;
          default:
        }
      },
      (error) => {
        alert("Update Image Error!");
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const userModel = { ...inputs, image: downloadURL };
          updateUser(userId, userModel, dispatch);
          alert("Update User Success!");
        });
      }
    );
  };

  // document.getElementById('username').change(enableBtn);
  // document.getElementById('fullname').change(enableBtn);
  // (".input").blur(enableBtn);

  // function enableBtn() {
  //   if (
  //     document.getElementById('username').isChecked == false ||
  //     document.getElementById('fullname').isChecked == false
  //   ) {
  //     document.getElementById('update').prop("disabled", true);
  //   } else {
  //     document.getElementById('update').prop("disabled", false);
  //   }
  // }
  // enableBtn();

  // document.getElementById('update').click(function () {
  //   ("form").submit(function (event) {
  //     document.getElementsByClassName('user').addClass("end");
  //     (".ending").addClass("showed");
  //     event.preventDefault();
  //   });
  // });

  return (
    <div className="user">
      <div className="userTitleContainer">
        <h1 className="userTitle">Edit User</h1>
      </div>
      <div className="userContainer">
        <div className="userShow">
          <div className="userShowTop">
            <img src={selectUser.image} alt="" className="userShowImg" />
            <div className="userShowTopTitle">
              <span className="userShowUserTitle">{selectUser.fullName}</span>
            </div>
          </div>
          <div className="userShowBottom">
            <span className="userShowTitle">Account Details</span>
            <div className="userShowInfo">
              <PermIdentity className="userShowIcon" />
              <span className="userShowInfoTitle">{selectUser.username}</span>
            </div>
            <div className="userShowInfo">
              <CalendarToday className="userShowIcon" />
              <span className="userShowInfoTitle">
                {formatDate(selectUser.created)}
              </span>
            </div>
            <div className="userShowInfo">
              <Man className="userShowIcon" />
              <span className="userShowInfoTitle">{selectUser.role}</span>
            </div>
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
                  id="username"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Full Name</label>
                <input
                  type="text"
                  placeholder="fullname"
                  className="userUpdateInput"
                  id="fullname"
                  onChange={handleChange}
                />
              </div>
              <div className="userUpdateItem">
                <label>Role</label>
                <select className="selectRole" onChange={handleChange}>
                  <option value="Factory">Factory</option>
                  <option value="Store">Store</option>
                  <option value="ServiceCenter">ServiceCenter</option>
                </select>
              </div>
            </div>
            <div className="userUpdateRight">
              <div className="userUpdateUpload">
                <img
                  className="userUpdateImg"
                  id="file-ip-1-preview"
                  src={selectUser.image}
                  alt=""
                />
                <label htmlFor="file">
                  <Publish className="userUpdateIcon" />
                </label>
                <input
                  type="file"
                  id="file"
                  style={{ display: "none" }}
                  onChange={(e) => {
                    setFile(e.target.files[0]);
                    if (e.target.files.length > 0) {
                      var src = URL.createObjectURL(e.target.files[0]);
                      var preview =
                        document.getElementById("file-ip-1-preview");
                      preview.src = src;
                      preview.style.display = "block";
                    }
                  }}
                />
              </div>
              <button
                className="userUpdateButton"
                id="update"
                onClick={handleClick}
                onChange={(state) => this.setState({isChecked: !state.isChecked})}
              >
                Update
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
