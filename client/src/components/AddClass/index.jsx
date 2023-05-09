import React, { useEffect, useState } from "react";
import classes from "./styles.module.css";
import "./styles.css";
import { getListClassService } from "../../services/class";
import ClassList from "../ClassList";
import { Link } from "react-router-dom";
import { KeyboardBackspace } from "@mui/icons-material";
import { getUserDetailService } from "../../services/user";

function AddClass() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);
  const [listClass, setListClass] = useState([]);
  useEffect(() => {
    const getUser = async () => {
      try {
        const userInfo = JSON.parse(localStorage.getItem("userInfo"));
        const res = await getUserDetailService(userInfo?.id);
        console.log(res);
        setListClass(res?.listClass);
      } catch (error) {
        console.log(error);
      }
    };
    getUser();
  }, []);

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await getListClassService(30, 1, keyword);
      console.log(response.classes);
      setResults(response?.classes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.addClassBackground}>
      <div className={classes.header}>
        <div className={classes.returnButtonBox}>
          <Link to={"/Home"}>
            <KeyboardBackspace className={classes.returnButton} />
          </Link>
        </div>
        Đăng ký môn học
      </div>
      <div className={classes.body}>
        <div className="search-box">
          <input
            type="text"
            placeholder="Tìm kiếm lớp học"
            value={keyword}
            onChange={handleInputChange}
            onKeyPress={(event) => event.key === "Enter" && handleSearch()}
            className="search-input"
          />
          <ClassList results={results} listClass={listClass} />
        </div>
      </div>
    </div>
  );
}

export default AddClass;
