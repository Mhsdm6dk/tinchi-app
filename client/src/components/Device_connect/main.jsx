import { Bottom } from "./Bottom";
import { Top } from "./Top";
// import axios from "axios";
import "./bottom.css";
import "./top.css";
import classes from "./main.module.css";

import homeIconActive from "../Footer/homeimgactive.svg";
import groupIconInactive from "../Footer/groupimginactive.svg";
import caddyIconInactive from "../Footer/Vector.svg";

// import { useEffect, useState } from "react";
// import Headerrr from "../Header/Header";
import "./top.css";
// import { useEffect, useState } from "react";

export function Device() {
  const userInfo = JSON.parse(localStorage.getItem("userInfo"));
  let name = userInfo?.name;
  // const [name , setName] = useState("");
  // const [flag, setFlag] = useState(false);

  // useEffect(()=>{
  //     try{
  //        axios.get("http://localhost:3001/user")
  //         .then((res)=>{
  //             let name = res.data[0].name;
  //             name = name.charAt(0).toUpperCase() + name.slice(1);
  //             name=name.split(" ")[0]

  //             setName(name)
  //             setFlag(true);
  //         })
  //     }catch(err){
  //         console.log(err);
  //     }

  // },[])

  name = name.charAt(0).toUpperCase() + name.slice(1);
  const listChar = name.split(" ");
  name = listChar[listChar?.length - 1];

  //   document.getElementById("homeicon").src = `${homeIconActive}`;
  //   document.getElementById("communityicon").src = `${groupIconInactive}`;
  //   document.getElementById("caddyicon").src = `${caddyIconInactive}`;

  return (
    <div
      style={{
        height: "100%",
        backgroundColor: " #FCF2FF",
        margin: "auto",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <div className={classes.top}>
        <Top name={name} fullName={userInfo?.name} />
      </div>
      <div className={classes.bottom}>
        <Bottom />
      </div>
    </div>
  );
}
