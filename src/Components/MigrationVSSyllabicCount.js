import React, { useState } from "react";
import "./components.css";
import Districts from "./Districts";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";
import {
  ScatterChart,
  Scatter,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  Label,
} from "recharts";
import Papa from "papaparse";
import DataFrame from "dataframe-js";

function GetStateObjects() {
  let states = [
    "Andaman And Nicobar Islands",
    "Andhra Pradesh",
    "Arunachal Pradesh",
    "Chandigarh",
    "Dadra And Nagar Haveli",
    "Daman And Diu",
    "Goa",
    "Haryana",
    "Himachal Pradesh",
    // "Jammu And Kashmir",
    "Madhya Pradesh",
    "Manipur",
    "Meghalaya",
    "Mizoram",
    "Nagaland",
    "Puducherry",
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
  const columns = [
    "Year",
    "State",
    "District",
    "AvgSyllabicCount",
    "In-migrants",
  ];
  const df = new DataFrame(rows, columns);
  // console.log("stateName: " + stateName);
  let dataObjects = [];
  if (stateName === "All States") {
    let dataDict = df.filter({ Year: yearInterval }).toArray();
    dataObjects = dataDict.map((row, index) => ({
      // Year: row[0],
      AvgSyllabicCount: row[3],
      In_migrants: parseInt(row[4]),
    }));
  } else {
    // districts = Districts(stateName);
    let dataDict = df
      .filter({ State: stateName, Year: yearInterval })
      .toArray();
    dataObjects = dataDict.map((row, index) => ({
      District: row[2],
      AvgSyllabicCount: row[3],
      In_migrants: parseInt(row[4]),
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
      width={300}
      height={200}
      margin={{
        top: 3,
        right: 3,
        bottom: 20,
        left: 3,
      }}
    >
      <CartesianGrid strokeDasharray="3 3" />
      <XAxis type="number" dataKey="In_migrants" tick={{ fontSize: 14 }}>
        <Label
          value="In-migrants"
          position="insideBottomCenter"
          dy={18}
          fontSize={15}
        />
      </XAxis>
      <YAxis type="number" dataKey="AvgSyllabicCount" tick={{ fontSize: 14 }}>
        <Label
          value="Syllabic Count"
          angle={-90}
          position="insideLeftCenter"
          dx={-15}
          fontSize={15}
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
function MigrationVSSyllabicCount(props) {
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
      // const response = await fetch("/data/YearwiseSyllabicCount3.csv");
      const response = await fetch("/data/SyllabicCount_vs_Migration.csv");
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

  return (
    <Container>
      <p className="textStyles">
        How syllabic complexity changes over immigration rate for
        {stateSelectElement} ?
      </p>
      <hr />
      <Row>
        <Col>
          <div className="cardText"> YEAR: 1972 - 1976</div>
          <ScatterPlotElement
            csvData={rows}
            state={stateSelected.label}
            yearInterval="1972 - 1976"
          />
        </Col>
        <Col>
          <div className="cardText"> YEAR: 1977 - 1981</div>

          <ScatterPlotElement
            csvData={rows}
            state={stateSelected.label}
            yearInterval="1977 - 1981"
          />
        </Col>
        <Col>
          <div className="cardText"> YEAR: 1982 - 1986</div>

          <ScatterPlotElement
            csvData={rows}
            state={stateSelected.label}
            yearInterval="1982 - 1986"
          />
        </Col>
      </Row>
      <br />
      <Row>
        <Col>
          <div className="cardText"> YEAR: 1987 - 1991</div>

          <ScatterPlotElement
            csvData={rows}
            state={stateSelected.label}
            yearInterval="1987 - 1991"
          />
        </Col>
        <Col>
          <div className="cardText"> YEAR: 1992 - 1996</div>

          <ScatterPlotElement
            csvData={rows}
            state={stateSelected.label}
            yearInterval="1992 - 1996"
          />
        </Col>
        <Col>
          <div className="cardText"> YEAR: 1997 - 2000</div>

          <ScatterPlotElement
            csvData={rows}
            state={stateSelected.label}
            yearInterval="1997 - 2000"
          />
        </Col>
      </Row>
    </Container>
  );
}
export default MigrationVSSyllabicCount;
