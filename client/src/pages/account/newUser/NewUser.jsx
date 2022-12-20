import { useState } from "react";
import app from "../../../firebase"
import { getStorage, ref, uploadBytesResumable, getDownloadURL } from "firebase/storage";
import "./newUser.css";
import { useDispatch } from "react-redux";
import { addUser } from "../../../api/userApi";

export default function NewUser() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({role: "Factory"});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }
  
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
        // Handle unsuccessful uploads
      },
      () => {
        // Handle successful uploads on complete
        // For instance, get the download URL: https://firebasestorage.googleapis.com/...
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
          const user = { ...inputs, image: downloadURL };
          console.log(user);
          addUser(user, dispatch);
        });
      }
    );
  };

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Username</label>
          <input type="text" placeholder="john" name="username" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Full Name</label>
          <input type="text" placeholder="John Smith" name="fullName" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Role</label>
          <select className="newUserSelect" name="role" id="role" onChange={handleChange} >
            <option value="Factory">Factory</option>
            <option value="store">Store</option>
            <option value="serviceCenter">ServiceCenter</option>
          </select>
        </div>
        <div className="newUserItem">
          <label>Password</label>
          <input type="password" name="password" placeholder="********" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Confirm PassWord</label>
          <input type="resetpassword" name="confirmPassword" placeholder="********" onChange={handleChange} />
        </div>
        <div className="newUserItem">
          <label>Image</label>
          <input type="file" onChange={(e) => setFile(e.target.files[0])} />
        </div>
        <button className="newUserButton" onClick={handleClick}>Create</button>
      </form >
    </div >
  );
}
