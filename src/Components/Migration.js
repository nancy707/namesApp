import React, { useState } from "react";
import "./components.css";
import Districts from "./Districts";
import SampleNames from "./SampleNames";
import Axios from "axios";
import Select from "react-select";
import { Container, Col, Row } from "react-bootstrap";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import Papa from "papaparse";
import DataFrame from "dataframe-js";

function GetMigrationData(rows, stateName, districtName) {
  const columns = ["Year", "State", "District", "In-migrants"];
  const df = new DataFrame(rows, columns);
  // console.log(rows);
  // console.log("districtName: " + districtName);
  let districts = [],
    dataObjects = [];
  if (districtName === "All Districts") {
    districts = Districts(stateName);
  } else {
    districts.push(districtName);
  }
  for (let i = 0; i < districts.length; i++) {
    let dataDict = df
      .filter({ State: stateName, District: districts[i] })
      .toArray();
    // console.log(dataDict);
    if (dataDict.length === 2) {
      dataDict.unshift(["1987 - 1991", stateName, districtName, ""]);
      dataDict.unshift(["1982 - 1986", stateName, districtName, ""]);
      dataDict.unshift(["1977 - 1981", stateName, districtName, ""]);
      dataDict.unshift(["1972 - 1976", stateName, districtName, ""]);
    }
    const districtObjects = dataDict.map((row, index) => ({
      Year: row[0],
      In_migrants: parseInt(row[3]),
    }));
    // console.log(districtObjects);
    dataObjects.push({ District: districts[i], Data: districtObjects });
  }
  return dataObjects;
}

function Migration(props) {
  const stateName = props.state;
  const districtName = props.district;
  const series = GetMigrationData(props.csvData, stateName, districtName);
  return (
    // <ResponsiveContainer width="100%" height={400}>
    <LineChart
      width={500}
      height={300}
      margin={{ top: 20, right: 75, bottom: 50, left: 30 }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis
        dataKey="Year"
        type="category"
        interval={0}
        angle={30}
        textAnchor="start"
        allowDuplicatedCategory={false}
        tick={{ fontSize: 14 }}
      >
        <Label
          value="Year intervals"
          position="insideBottomCenter"
          dy={55}
          fontSize={15}
        />
      </XAxis>
      <YAxis type="number" tick={{ fontSize: 14 }}>
        <Label
          value="In-migrants"
          angle={-90}
          position="insideLeftCenter"
          dx={-45}
          fontSize={15}
        />
      </YAxis>
      {/* <YAxis /> */}
      {/* <Tooltip /> */}
      {/* <Legend
          wrapperStyle={{ position: "relative" }}
          layout="horizontal"
          verticalAlign="right"
          align="center"
        /> */}
      {series.map((s) => (
        <Line
          type="monotone"
          dataKey="In_migrants"
          data={s.Data}
          name={s.District}
          key={s.District}
          dot={false}
          // activeDot={{ onClick: (event, payload) => console.log(payload) }}
        />
      ))}
    </LineChart>
    // </ResponsiveContainer>
  );
}

export default Migration;
