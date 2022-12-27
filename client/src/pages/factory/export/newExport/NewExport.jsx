import { useState } from "react";
import "./newExport.scss";
import { useDispatch } from "react-redux";

export default function NewExport() {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState({role: "Factory"});
  const [file, setFile] = useState(null);

  const handleChange = (e) => {
    setInputs(prev => {
      return { ...prev, [e.target.name]: e.target.value }
    })
  }

  return (
    <div className="newUser">
      <h1 className="newUserTitle">New User</h1>
      <form className="newUserForm">
        <div className="newUserItem">
          <label>Name</label>
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
        <button className="newUserButton">Create</button>
      </form >
    </div >
  );
}
