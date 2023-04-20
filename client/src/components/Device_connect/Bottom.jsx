import { HeadCard } from "./Head_card";
import { SubCard } from "./Sub_card";
import "./bottom.css";
import sleep from "./sleep.svg";
import glucose from "./glucose.svg";
import pulse from "./pulse.svg";
import spo2 from "./spo2.svg";
import schedule from "./3652191.png";
import profileIcon from "./3135715.png";
import classroomIcon from "./google-classroom.png";
import addSubject from "./2921226.png";
import steps from "./stepcount.svg";
import { useEffect, useState } from "react";
import { device_data } from "../Device_connect/data.json";

import Highest from "./Main_tile_logos/high.svg";
import Lowest from "./Main_tile_logos/low.svg";
import Average from "./Main_tile_logos/average.svg";
import CaloriesBurned from "./Main_tile_logos/mini_fire.svg";
import DistanceCovered from "./Main_tile_logos/mini_person.svg";
import Hydration from "./Main_tile_logos/water.svg";
//import {Alcohol}

export function Bottom() {
  const [mini_logos] = useState({
    Highest: Highest,
    Lowest: Lowest,
    Average: Average,
    CaloriesBurned: CaloriesBurned,
    DistanceCovered: DistanceCovered,
    Hydration: Hydration,
    Alcohol: glucose,
    Range: Highest,
    REM: sleep,
    Deep: sleep,
  });
  const [imgs] = useState({
    sleep: sleep,
    glucose: glucose,
    pulse: pulse,
    spo2: spo2,
    steps: steps,
  });
  const [order, setOrder] = useState([0, 1, 2, 3, 4]);

  const [index, setIndex] = useState(null);
  const [flag, setFlag] = useState(false);

  const handleOnclick = (data, index) => {
    setFlag(!flag);
    setIndex(index);
  };

  useEffect(() => {
    const swap = () => {
      let temp = order[0];
      order[0] = order[index];
      order[index] = temp;
    };
    if (flag) {
      swap(index);
      setFlag(false);
      setOrder(order);
      setIndex(null);
    }

    return () => {};
  }, [index, order, flag]);

  return (
    <div
      style={{
        height: "100%",
        padding: "20px",
        display: "flex",
        flexDirection: "column",
      }}
    >
      <HeadCard
        data={device_data}
        imgs={imgs}
        logos={mini_logos}
        order={order[0]}
        index={"0"}
      />
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          margin: "15px -5px 70px",
        }}
      >
        <SubCard
          styles={{}}
          title={"Đăng ký môn học"}
          img={addSubject}
          index={"1"}
          link={"/add-class"}
          handleOnclick={handleOnclick}
        />
        <SubCard
          index={"2"}
          img={schedule}
          title="Thời khóa biểu"
          link={"/schedule"}
          handleOnclick={handleOnclick}
        />
        <SubCard
          index={"3"}
          handleOnclick={handleOnclick}
          img={profileIcon}
          link={"/profile"}
          title={"Thông tin cá nhân"}
        />
        <SubCard
          index={"4"}
          handleOnclick={handleOnclick}
          img={classroomIcon}
          link={"/list-class"}
          title={"Danh sách lớp học"}
        />
      </div>
    </div>
  );
}
