import "./login.css"
import { useState } from "react";
import { useDispatch } from "react-redux";
import PersonOutlineIcon from '@mui/icons-material/PersonOutline';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import { login } from "../../api/authApi";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  
  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='login-page'>
      <div className="login-section">
        <div className="login-box">
          <div className="content">
            <div className="title-section">
              <div className="title">WELCOME BACK</div>
              <div className="sub-title">Please enter your details.</div>
            </div>
            <div className="input-section">
              <div className="input-title">Username</div>
              <div className="input username">
                <div className="icon">
                  <PersonOutlineIcon />
                </div>
                <input onChange={(e) => {
                  setUsername(e.target.value)
                }} type="text" placeholder="Enter your username" />
              </div>
              <div className="input-title">Password</div>
              <div className="input password">
                <div className="icon">
                  <LockOutlinedIcon />
                </div>
                <input onChange={(e) => {
                  setPassword(e.target.value)
                }} type="password" placeholder="• • • • • • • •" />
              </div>
              <div className="incorrect">
                <p className="inactive">The username or password is incorrect. Please try again!</p>
              </div>
              <em className="forgot">Forgot password?</em>
            </div>
            <button className="enter" onClick={handleClick}>LOG IN</button>
          </div>
        </div>
      </div>
      <div className="login-img">
        <img src="https://firebasestorage.googleapis.com/v0/b/productionmove-af5f1.appspot.com/o/truck%403x.png?alt=media&token=d02199cd-3f29-4273-aeb6-ccfebb70f357" alt="" />
      </div>
    </div>
  );
};

export default Login;