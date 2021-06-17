import React from "react";
import "./components.css";
import Districts from "./Districts";
import { LineChart, Line, CartesianGrid, XAxis, YAxis, Label } from "recharts";
import DataFrame from "dataframe-js";
// import csvData from "./YearwiseSyllabicCount3.csv";

function GetSyllabicData(rows, stateName, districtName) {
  const columns = ["Year", "State", "District", "People", "AvgSyllabicCount"];
  // console.log("Syllabic rows: ");
  const df = new DataFrame(rows, columns);
  // console.log(df);

  // console.log("stateName: " + stateName);
  // console.log("districtName: " + districtName);
  let districts = [],
    dataObjects = [];
  if (districtName === "All Districts") {
    districts = Districts(stateName);
  } else {
    districts.push(districtName);
  }
  for (let i = 0; i < districts.length; i++) {
    const dataDict = df
      .filter({ State: stateName, District: districts[i] })
      .toArray();
    const districtObjects = dataDict.map((row, index) => ({
      Year: row[0],
      // State: row[1],
      // People: row[3],
      SyllabicCount: row[4],
    }));
    dataObjects.push({ District: districts[i], Data: districtObjects });
  }
  // console.log(dataObjects);

  return dataObjects;
}

function SyllabicCount(props) {
  const stateName = props.state;
  const districtName = props.district;
  // console.log(stateName);
  // console.log(districtName);
  const series = GetSyllabicData(props.csvData, stateName, districtName);
  return (
    // <Label content="Syllabic Complexity">
    <LineChart
      width={700}
      height={300}
      margin={{ top: 30, right: 15, bottom: 50, left: 5 }}
    >
      <CartesianGrid strokeDasharray="4 4" />
      <XAxis
        dataKey="Year"
        type="category"
        allowDuplicatedCategory={false}
        tick={{ fontSize: 14 }}
      >
        <Label
          value="Year"
          position="insideBottomCenter"
          dy={18}
          fontSize={15}
        />
      </XAxis>

      <YAxis domain={[1.5, 3.5]} tick={{ fontSize: 14 }}>
        <Label
          value="Syllabic Count"
          angle={-90}
          position="insideLeftCenter"
          dx={-15}
          fontSize={15}
        />
      </YAxis>
      {/* <Tooltip /> */}
      {/* <Legend /> */}
      {series.map((s) => (
        <Line
          type="monotone"
          dataKey="SyllabicCount"
          data={s.Data}
          name={s.District}
          key={s.District}
          dot={false}
        />
      ))}
    </LineChart>
    // </Label>
  );
}

export default SyllabicCount;
