import SmallLogo from "./SmallLogo";
import axios from "axios";
import { useEffect, useState } from "react";
import "./signin.css";
import { Link, useHistory } from "react-router-dom";
import { useContext } from "react";
import { Appcontext } from "../../context/Appcontext";
import classes from "./styles.module.css";
import { config } from "../../config";

export default function Signin({ handle_user_name }) {
  // const [auth,setAuth]=useState(false)
  const { setUserl } = useContext(Appcontext);
  const [user, setUser] = useState({
    email: "",
    password: "",
  });
  const handleChange = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setUser({ ...user, [name]: value });
  };

  const [error, setError] = useState([]);
  const [eState, setEstate] = useState(false);

  const history = useHistory();

  function submit() {
    try {
      axios
        .post(`${config.service_host}/user/login`, user)
        .then((res) => {
          localStorage.setItem("token", res.data.data.token);
          localStorage.setItem(
            "userInfo",
            JSON.stringify(res.data.data.userInfo)
          );
          //    changeState("other")
          history.push("/Home");
          // setAuth(true);
          setEstate(true);
        })
        .catch((err) => {
          setError([err.response.data.message]);
          setEstate(true);
        });
    } catch (err) {}
    setUser({
      email: "",
      password: "",
    });
  }
  return (
    <div className="signDiv">
      <div style={{ marginTop: "-180px", width: "10px" }}>
        <SmallLogo />
      </div>
      <div className={classes.title}>
        <p className="titlep1">Quản lý học phần</p>
        <p className="titlep2">Vui lòng đăng nhập để đăng kí môn học !</p>
      </div>

      <div className="signUpLogin"></div>
      <div className={classes.details}>
        <label>
          <p style={{ color: "lightgrey" }}>Email</p>
        </label>
        <input
          className={classes.email}
          type="text"
          name="email"
          value={user.email}
          onChange={handleChange}
        />
        <br />
        <label>
          <p style={{ color: "lightgrey" }}>Password</p>
        </label>
        <input
          className={classes.password}
          type="password"
          name="password"
          value={user.password}
          onChange={handleChange}
        />
      </div>
      <div className={classes.forgetPasswordBox}>
        <span style={{ color: "#5c89c7" }}>Quên mật khẩu? </span>
        vui lòng liên hệ phòng đào tạo để được cấp lại mật khẩu
      </div>

      {eState ? (
        <div className="errorDivSI">
          <div className="allErrSI">
            {error.map((e) => (
              <div className={classes.error} key={e}>
                {e}
              </div>
            ))}
          </div>{" "}
          <button onClick={() => setEstate(false)}>x</button>
        </div>
      ) : (
        ""
      )}
      <button className={classes.signinbtn} onClick={submit}>
        Đăng nhập
      </button>
      {/* <p className="signupreminder">
        Don't have an account?
        <button>
          <Link to="/signup">Sign Up</Link>
        </button>
      </p> */}
    </div>
  );
}
