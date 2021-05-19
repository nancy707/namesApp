import React, { useState } from "react";
import "./components.css";
import Districts from "./Districts";
import SampleNames from "./SampleNames";
import Migration from "./Migration";
import SyllabicCount from "./SyllabicCount";
import GDP from "./GDP";
import Axios from "axios";
import Select from "react-select";
import { Container, Col, Row } from "react-bootstrap";
import Papa from "papaparse";
import DataFrame from "dataframe-js";

import { GlassMagnifier, SideBySideMagnifier } from "react-image-magnifiers";
import image from "./image.png";
import largeImage from "./largeImage.png";
import MigrationVSSyllabicCount from "./MigrationVSSyllabicCount";
import GDPVSSyllabicCount from "./GDPVSSyllabicCount";
// const csvFilePath = "http://localhost:3000/data/AllYearsSyllabicCount.csv";

// const csvFilePath = "/data/YearwiseSyllabicCount3.csv";
// const csvFilePath =
// "https://github.com/nancy707/files/blob/main/YearwiseSyllabicCount3.csv";
// DataFrame.fromCSV(csvFilePath).then((df) => df.show());
// let myDF;
// DataFrame.fromCSV(csvFilePath1).then((df) => (myDF = df));
// Papa.parse(csvFilePath, {
//   header: true,
//   delimiter: ",",
//   linebreak: "\n",
//   complete: function (results) {
//     // callBack(results.data);
//     console.log("Data: " + results.data.length, results);
//   },
// });

function GetYearObjects() {
  let years = [];
  const start = 1972;
  for (let i = 0; i < 29; i++) {
    years.push(start + i);
  }
  const yearObjects = years.map((str, index) => ({
    value: index + 1,
    label: str,
  }));
  return yearObjects;
}

function GetStateObjects() {
  const states = [
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
  const stateObjects = states.map((str, index) => ({
    value: index + 1,
    label: str,
  }));
  return stateObjects;
}

function GetDistrictObjects(stateName) {
  let districts = Districts(stateName);
  districts.unshift("All Districts");
  const districtObjects = districts.map((str, index) => ({
    value: index,
    label: str,
  }));
  return districtObjects;
}

function MainPage() {
  const [show, setShowVariable] = useState(false);
  const [stateSelected, setStateSelected] = useState({
    value: 2,
    label: "Andhra Pradesh",
  });
  const changeStateSelectOptionHandler = (event) => {
    setStateSelected(event);
    setDistrictSelected({ value: 0, label: "All Districts" });
  };

  const [districtSelected, setDistrictSelected] = useState({
    value: 0,
    label: "All Districts",
  });
  const changeDistrictSelectOptionHandler = (event) => {
    setDistrictSelected(event);
    setShowVariable(true);
  };

  const [yearSelected, setYearSelected] = useState({
    value: 29,
    label: 2000,
  });
  const changeYearSelectOptionHandler = (event) => {
    setYearSelected(event);
  };

  const [syllabicRows, setSyllabicRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      // const response = await fetch("/data/YearwiseSyllabicCount3.csv");
      const response = await fetch(
        "https://nancy707.github.io/namesApp/data/AllYearsSyllabicCount.csv"
      );
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setSyllabicRows(rows);
      // console.log("Syllabic rows: ");
      // console.log(syllabicRows);
    }
    getData();
  }, []);

  const [migrationRows, setMigrationRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://nancy707.github.io/namesApp/data/MigrationTableFinal.csv"
      );
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setMigrationRows(rows);
    }
    getData();
  }, []);

  const [gdpRows, setGDPRows] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const response = await fetch(
        "https://nancy707.github.io/namesApp/data/YearwiseGDP.csv"
      );
      const reader = response.body.getReader();
      const result = await reader.read(); // raw array
      const decoder = new TextDecoder("utf-8");
      const csv = decoder.decode(result.value); // the csv text
      const results = Papa.parse(csv, { header: true }); // object with { data, errors, meta }
      const rows = results.data; // array of objects
      setGDPRows(rows);
    }
    getData();
  }, []);

  const [sampleNameRows1, setSampleNameRows1] = React.useState([]);
  React.useEffect(() => {
    // setSampleNameRows1(DataFrame.fromCSV(csvFilePath1))
    async function getData() {
      const csvFilePath1 =
        "https://nancy707.github.io/namesApp/data/SampleNames1.csv";
      let temp = await DataFrame.fromCSV(csvFilePath1);
      setSampleNameRows1(temp.toCollection());
    }
    getData();
  }, []);

  const [sampleNameRows2, setSampleNameRows2] = React.useState([]);
  React.useEffect(() => {
    async function getData() {
      const csvFilePath2 =
        "https://nancy707.github.io/namesApp/data/SampleNames2.csv";
      let temp = await DataFrame.fromCSV(csvFilePath2);
      setSampleNameRows2(temp.toCollection());
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

  const districtSelectElement = (
    <Select
      className="select-search mt-2 col-md-3 col-offset-2"
      classNamePrefix="select"
      placeholder="All Districts"
      onChange={changeDistrictSelectOptionHandler}
      selectedValue={districtSelected}
      isClearable="true"
      isSearchable="true"
      name="district"
      options={GetDistrictObjects(stateSelected.label)}
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
      <div className="w3-cell-row heading">
        <h2>Evolution of naming conventions in India</h2>
        <p className="textStyles">
          How data changes over time for state {stateSelectElement} and for
          district {districtSelectElement} ?
        </p>
      </div>
      <hr />
      <div className="w3-cell-row">
        <div class="w3-container w3-cell" style={{ width: "30%" }}>
          <h5 style={{ marginTop: "8px" }}>
            {stateSelected.label.toUpperCase()}
          </h5>
          <SideBySideMagnifier
            imageSrc={image}
            imageAlt="Example"
            largeImageSrc={largeImage}
            className="stateCard"
          />
        </div>

        <div class="w3-container w3-cell" style={{ width: "70%" }}>
          <div className="graphCard">
            <br />
            <div className="cardText">Syllabic Complexity over years</div>
            <SyllabicCount
              csvData={syllabicRows}
              state={stateSelected.label}
              district={districtSelected.label}
            />
          </div>
        </div>
      </div>
      <div class="w3-cell-row">
        {/* <div class="w3-responsive"> */}
        <table
          className="w3-table-all w3-centered"
          style={{ marginTop: "25px" }}
        >
          <tr>
            <th colspan="4">Sample names in {yearSelectElement}</th>
          </tr>
          <SampleNames
            csvData1={sampleNameRows1}
            csvData2={sampleNameRows2}
            state={stateSelected.label}
            district={districtSelected.label}
            year={yearSelected.label}
          />
        </table>
        {/* </div> */}
      </div>

      <div class="w3-cell-row" style={{ marginTop: "25px" }}>
        <div class="w3-container w3-cell" style={{ width: "50%" }}>
          <div className="graphCard">
            <br />
            <div className="cardText">Immigration over year-intervals</div>
            <Migration
              csvData={migrationRows}
              state={stateSelected.label}
              district={districtSelected.label}
            />
          </div>
        </div>
        <div class="w3-container w3-cell" style={{ width: "50%" }}>
          <div className="graphCard">
            <br />
            <div className="cardText">Gross domestic product over time</div>
            <GDP
              csvData={gdpRows}
              state={stateSelected.label}
              district={districtSelected.label}
            />
          </div>
        </div>
      </div>

      <div class="w3-cell-row" style={{ marginTop: "30px" }}>
        <MigrationVSSyllabicCount
          stateValue={stateSelected.value}
          stateLabel={stateSelected.label}
        />
      </div>

      <div
        class="w3-cell-row"
        style={{ marginTop: "30px", marginBottom: "30px" }}
      >
        <GDPVSSyllabicCount
          stateValue={stateSelected.value}
          stateLabel={stateSelected.label}
        />
      </div>
    </Container>

    // <Container className="upperContainer">
    //   <p>
    //     How data changes over time for state {stateSelectElement} and for
    //     district {districtSelectElement} ?
    //   </p>

    //   <Row>
    //     <Col>
    //       <div className="graphCard">
    //         <SyllabicCount
    //           csvData={syllabicRows}
    //           state={stateSelected.label}
    //           district={districtSelected.label}
    //         />
    //       </div>
    //       {/* {show ? (
    //         <LineChartElementForSyllabicCount
    //           csvData={syllabicRows}
    //           state={stateSelected.label}
    //           district={districtSelected.label}
    //         />
    //       ) : (
    //         <div></div>
    //       )} */}
    //     </Col>
    //     <Col>
    //       <div className="graphCard">
    //         <Migration
    //           csvData={migrationRows}
    //           state={stateSelected.label}
    //           district={districtSelected.label}
    //         />
    //       </div>
    //       {/* {show ? (
    //         <LineChartElementForMigration
    //           csvData={migrationRows}
    //           state={stateSelected.label}
    //           district={districtSelected.label}
    //         />
    //       ) : (
    //         <div></div>
    //       )} */}
    //     </Col>
    //   </Row>
    //   <Row>
    //     <Col>
    //       <div className="graphCard">
    //         <h5>
    //           Sample names in <br /> {yearSelectElement}
    //         </h5>
    //         {/* <ul class="w3-ul w3-card-2" style={{ width: "30%" }}> */}
    //         <ul class="w3-ul w3-center" style={{ width: "30%" }}>
    //           <SampleNames
    //             csvData1={sampleNameRows1}
    //             csvData2={sampleNameRows2}
    //             state={stateSelected.label}
    //             district={districtSelected.label}
    //             year={yearSelected.label}
    //           />
    //         </ul>
    //       </div>
    //     </Col>
    //     <Col></Col>
    //   </Row>
    // </Container>
  );
}
export default MainPage;
