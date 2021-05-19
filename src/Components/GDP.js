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

function GetGDPData(rows, stateName, districtName) {
  const columns = ["Year", "State", "District", "GDP"];
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

    const districtObjects = dataDict.map((row, index) => ({
      Year: row[0],
      GDP: parseInt(row[3]),
    }));
    // console.log(districtObjects);
    dataObjects.push({ District: districts[i], Data: districtObjects });
  }
  return dataObjects;
}

function GDP(props) {
  const stateName = props.state;
  const districtName = props.district;
  const series = GetGDPData(props.csvData, stateName, districtName);
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
          value="Year"
          position="insideBottomCenter"
          dy={40}
          fontSize={15}
        />
      </XAxis>
      <YAxis type="number" tick={{ fontSize: 14 }}>
        <Label
          value="GDP (in Rs. Cr.)"
          angle={-90}
          position="insideLeftCenter"
          dx={-40}
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
          dataKey="GDP"
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

export default GDP;
