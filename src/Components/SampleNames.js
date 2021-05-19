import React, { useState } from "react";
import "./components.css";
import Districts from "./Districts";
import Select from "react-select";
import { Container, Row, Col } from "react-bootstrap";

import DataFrame from "dataframe-js";

function GetSampleNamesData(rows1, rows2, stateName, districtName, year) {
  const columns = [
    "Year",
    "State",
    "District",
    "People",
    "AvgSyllabicCount",
    "Name1",
    "Name2",
    "Name3",
    "Name4",
    "Name5",
    "Name6",
    "Name7",
    "Name8",
    "Name9",
    "Name10",
  ];
  //   console.log("Sample names rows1: ");
  //   console.log(rows1);
  //   console.log("Sample names rows2: ");

  //   console.log(rows2);

  let df = new DataFrame(rows1, columns);
  //   console.log(df);
  const df2 = new DataFrame(rows2, columns);
  //   console.log(df2);

  df = df.union(df2);
  //   console.log(df);

  let district = Districts(stateName)[0];

  if (districtName !== "All Districts") {
    district = districtName;
  }

  const yearString = String(year);
  const dataDict = df
    .filter({ State: stateName, District: district, Year: yearString })
    .toArray();

  //   console.log(stateName);
  //   console.log(district);
  //   console.log(yearString);
  //   console.log(dataDict);

  //   console.log(dataDict.length);

  if (dataDict.length > 0) {
    for (let i = 0; i < 5; i++) {
      dataDict[0].shift();
    }
  }
  return dataDict[0];
}

function SampleNames(props) {
  // console.log("fun");
  // console.log(props.csvData1);
  // console.log(props.csvData2);
  const objects = GetSampleNamesData(
    props.csvData1,
    props.csvData2,
    props.state,
    props.district,
    props.year
  );
  //   console.log(objects);
  if (objects === undefined) {
    return <></>;
  }
  return (
    <>
      <tr>
        <td>{objects[0]}</td>
        <td>{objects[1]}</td>
        <td>{objects[2]}</td>
        <td>{objects[3]}</td>
      </tr>
      <tr>
        <td>{objects[4]}</td>
        <td>{objects[5]}</td>
        <td>{objects[6]}</td>
        <td>{objects[7]}</td>
      </tr>
      <tr>
        <td></td>
        <td>{objects[8]}</td>
        <td>{objects[9]}</td>
        <td></td>
      </tr>
      {/* {objects.map((object, index) => (
        <li key={index}>{object}</li>
      ))} */}
    </>
  );
}

export default SampleNames;
