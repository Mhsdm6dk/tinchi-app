import React from "react";
import classes from "./styles.module.css";
import { getInitials, stringToColor } from "../../utils";
import moveRight from "./right-arrow-icon-png-7.jpg";
import { Avatar } from "@mui/material";
import { Link, useHistory } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";

const Profile = () => {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  const history = useHistory();
  return (
    <div className={classes.profileBackground}>
      <div className={classes.header}>
        <div className={classes.returnButtonBox}>
          <Link to={"/Home"}>
            <KeyboardBackspace className={classes.returnButton} />
          </Link>
        </div>
        Thông tin người dùng
      </div>
      <div className={classes.body}>
        <div className={classes.profileAvatar}>
          <Avatar
            sx={{ mr: 2, bgcolor: stringToColor(userInfo?.name) }}
            style={{
              margin: "unset",
              width: "70px",
              height: "70px",
              marginBottom: "50px",
            }}
          >
            {getInitials(userInfo?.name)}
          </Avatar>
        </div>
        <div className={classes.profileDetail}>
          <div className={classes.profileDetailHead}></div>
          <div className={classes.profileDetailInfo}>
            <div className={classes.profileDetailInfo_info}>
              <div>Họ và tên: </div>
              <div>{userInfo?.name}</div>
            </div>
            <div className={classes.profileDetailInfo_info}>
              <div>Email:</div> <div>{userInfo?.email}</div>
            </div>
            <div className={classes.profileDetailInfo_info}>
              <div>Số điện thoại:</div> <div>{userInfo?.phone_number}</div>
            </div>
          </div>
          <div className={classes.profileDetailInfo}>
            <div
              className={classes.profileDetailInfo_info}
              style={{ borderBottom: "unset", padding: "unset" }}
            >
              <div>Đổi mật khẩu</div>
              <img src={moveRight} style={{ width: "25px" }} />
            </div>
          </div>
          <div className={classes.profileDetailInfo}>
            <div
              className={classes.profileDetailInfo_info}
              style={{ borderBottom: "unset", padding: "unset" }}
              onClick={() => {
                localStorage.clear("userInfo");
                localStorage.clear("token");
                history.push("/");
              }}
            >
              <div>Đăng xuất</div>
              <img src={moveRight} style={{ width: "25px" }} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
