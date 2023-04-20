import React, { useState } from "react";
import classes from "./styles.module.css";
import "./styles.css";
import { getListClassService } from "../../services/class";
import ClassList from "../ClassList";

function AddClass() {
  const [keyword, setKeyword] = useState("");
  const [results, setResults] = useState([]);

  const handleInputChange = (event) => {
    setKeyword(event.target.value);
  };

  const handleSearch = async () => {
    try {
      const response = await getListClassService(30, 1, keyword);
      console.log(response.classes)
      setResults(response?.classes);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className={classes.addClassBackground}>
      <div className="search-box">
        <input
          type="text"
          placeholder="Tìm kiếm lớp học"
          value={keyword}
          onChange={handleInputChange}
          onKeyPress={(event) => event.key === "Enter" && handleSearch()}
          className="search-input"
        />
        <ClassList results={results} />
      </div>
    </div>
  );
}

export default AddClass;
