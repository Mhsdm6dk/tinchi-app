import { Avatar } from "@mui/material";
import { NavCard } from "./nav_card";
import profile from "./profile.svg";
import "./top.css";
import classes from "./top.module.css";
import { getInitials, stringToColor } from "../../utils";
export function Top({ name, fullName }) {
  let times = ["08:00 pm", "10:00 pm"];
  return (
    <div>
      <div
        style={{
          display: "flex",
          width: "100%",
          padding: "10px 20px",
        }}
      >
        <div
          style={{
            flex: 1,
          }}
        >
          <h1 className={classes.name}>Xin chào, {name}!</h1>
          <p className={classes.para}>Vui lòng chọn chức năng bên dưới</p>
        </div>
        {/* <img src={profile} className={classes.img} alt="newww" /> */}
        <Avatar
          sx={{ mr: 2, bgcolor: stringToColor(fullName) }}
          style={{ margin: "unset" }}
        >
          {getInitials(fullName)}
        </Avatar>
      </div>

      <div style={{ display: "flex", width: "100%", padding: "0 15px" }}>
        <NavCard
          heading={"pills Due"}
          count={"2"}
          sub_head={"Due"}
          time={times}
          date
        />
        <NavCard
          heading={"pills Taken"}
          count={"3"}
          sub_head={"Time"}
          time={times}
        />
      </div>
    </div>
  );
}
