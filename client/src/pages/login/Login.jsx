import "./login.css"
import { useState } from "react";
import { login } from "../../redux/apiCalls";
import { useDispatch, useSelector } from "react-redux";
// import { FaHeart, FaRegHeart } from 'react-icons/fa';
// import { AiOutlineUser } from "react-icons/ai";
// import { TbKey } from "react-icons/tb";
// import { Link } from "react-router-dom";
// import { IoIosLogIn } from "react-icons/io";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const dispatch = useDispatch();
  const { isFetching } = useSelector((state) => state.user);

  const handleClick = (e) => {
    e.preventDefault();
    login(dispatch, { username, password });
  };

  return (
    <div className='login-page'>
      <div className="login-section">
        <div className="login-box">
          <div className="title">WELCOME BACK</div>
          {/* <div className="input username">
            <AiOutlineUser/>
            <input type="text" placeholder=""/>
          </div>
          <div className="input password">
            <TbKey/>
            <input type="text" />
          </div> */}
          <em className="forgot">Forgot password?</em>
          <button className="enter">LOG IN</button>
        </div>
      </div>
      <div className="login-img">
        <img src="https://firebasestorage.googleapis.com/v0/b/productionmove-af5f1.appspot.com/o/truck%403x.png?alt=media&token=d02199cd-3f29-4273-aeb6-ccfebb70f357" alt="" />
      </div>
    </div>
  );
};

export default Login;