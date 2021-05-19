import React, { useState } from "react";
import "./components.css";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import {
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Label,
} from "recharts";
import Papa from "papaparse";
import DataFrame from "dataframe-js";

function GetYearObjects() {
  let years = [];
  const start = 1993;
  for (let i = 0; i < 8; i++) {
    years.push(start + i);
  }
  const yearObjects = years.map((str, index) => ({
    value: index + 1,
    label: str,
  }));
  return yearObjects;
}

function GetStateObjects() {
  let states = [
    "Andhra Pradesh",
    "Haryana",
    "Himachal Pradesh",
    // "Jammu And Kashmir",
    "Madhya Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Uttar Pradesh",
    "Uttarakhand",
  ];
  states.unshift("All States");
  const stateObjects = states.map((str, index) => ({
    value: index,
    label: str,
  }));
  return stateObjects;
}

function GetData(rows, stateName, yearInterval) {
  const columns = ["Year", "State", "District", "AvgSyllabicCount", "GDP"];
  const df = new DataFrame(rows, columns);
  // console.log("stateName: " + stateName);
  console.log(df);
  let dataObjects = [];
  if (stateName === "All States") {
    let dataDict = df.filter({ Year: yearInterval }).toArray();
    dataObjects = dataDict.map((row, index) => ({
      // Year: row[0],
      AvgSyllabicCount: row[3],
      GDP: parseInt(row[4]),
    }));
  } else {
    // districts = Districts(stateName);
    let dataDict = df
      .filter({ State: stateName, Year: yearInterval })
      .toArray();
    dataObjects = dataDict.map((row, index) => ({
      District: row[2],
      AvgSyllabicCount: row[3],
      GDP: parseInt(row[4]),
    }));
  }
  return dataObjects;
}

function ScatterPlotElement(props) {
  const stateName = props.state;
  const yearInterval = props.yearInterval;
  const data = GetData(props.csvData, stateName, yearInterval);
  // console.log(data);
  return (
    <ScatterChart
      width={500}
      height={300}
      margin={{
        top: 3,
        right: 3,
        bottom: 20,
        left: 3,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="GDP" tick={{ fontSize: 13 }}>
        <Label
          value="GDP"
          position="insideBottomCenter"
          dy={18}
          fontSize={14}
        />
      </XAxis>
      <YAxis type="number" dataKey="AvgSyllabicCount" tick={{ fontSize: 13 }}>
        <Label
          value="Syllabic Count"
          angle={-90}
          position="insideLeftCenter"
          dx={-15}
          fontSize={14}
        />
      </YAxis>
      {/* <Tooltip cursor={{ strokeDasharray: "3 3" }} /> */}
      <Scatter
        name=""
        data={data}
        // stroke="rgb(0, 157, 249)"
        strokeWidth={0.5}
        width={1}
        fillOpacity={0.5}
        fill="rgb(0, 157, 249)"
      />
      {/* fill="#8884d8" */}
    </ScatterChart>
  );
}
function GDPVSSyllabicCount(props) {
  // console.log(props.stateValue);
  const [stateSelected, setStateSelected] = useState({
    value: props.stateValue + 1,
    label: props.stateLabel,
  });
  const changeStateSelectOptionHandler = (event) => {
    setStateSelected(event);
  };

  const [rows, setRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://nancy707.github.io/namesApp/data/SyllabicCount_vs_GDP.csv"
      );
      // const csvFilePath1 =
      // "http://localhost:3000/data/SyllabicCount_vs_GDP.csv";
      // let temp = await DataFrame.fromCSV(csvFilePath1);
      // setRows(temp.toCollection());
      // console.log(rows);
      // const response = await fetch("/data/SyllabicCount_vs_GDP.csv");
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setRows(rows);
    }
    getData();
  }, []);

  const [yearSelected, setYearSelected] = useState({
    value: 8,
    label: 2000,
  });
  const changeYearSelectOptionHandler = (event) => {
    setYearSelected(event);
  };

  const stateSelectElement = (
    <Select
      className="select-search mt-2 col-md-3 col-offset-2"
      classNamePrefix="select"
      placeholder="Andhra Pradesh"
      onChange={changeStateSelectOptionHandler}
      selectedValue={stateSelected}
      isClearable="true"
      isSearchable="true"
      name="state"
      options={GetStateObjects()}
    />
  );

  const yearSelectElement = (
    <Select
      className="select-search mt-1 col-md-2 col-offset-1"
      classNamePrefix="select"
      placeholder="2000"
      onChange={changeYearSelectOptionHandler}
      selectedValue={yearSelected}
      // isClearable="true"
      isSearchable="true"
      name="year"
      options={GetYearObjects()}
    />
  );

  return (
    <Container>
      <p className="textStyles">
        How syllabic complexity changes over GDP growth for
        {stateSelectElement} in {yearSelectElement}?
      </p>
      <hr />

      <div className="cardText"> YEAR: {yearSelected.label}</div>
      <ScatterPlotElement
        csvData={rows}
        state={stateSelected.label}
        yearInterval={yearSelected.label}
      />
    </Container>
  );
}
export default GDPVSSyllabicCount;
