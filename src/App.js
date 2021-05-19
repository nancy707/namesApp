import React, { useEffect, useState } from "react";
import "./App.css";
import Axios from "axios";
import { LinkContainer } from "react-router-bootstrap";
import {
  Container,
  Navbar,
  Nav,
  Button,
  Form,
  FormControl,
} from "react-bootstrap";
import MainPage from "./Components/MainPage";

function App() {
  const [name, setName] = useState("");
  const [roll, setRoll] = useState("");
  const [studentList, setStudentList] = useState([]);

  // to retrieve the data from database through backend
  // useEffect(() => {
  //   Axios.get("http://localhost:3001/read").then((response) => {
  //     console.log(response.data);
  //     setStudentList(response.data);
  //   });
  // }, []);

  // to retrieve the data from database through backend
  // useEffect((stateName) => {
  //   Axios.get("http://localhost:3001/readSyllabicCount", {
  //     params: { state: stateName },
  //   }).then((response) => {
  //     console.log(response.data);
  //     setStudentList(response.data);
  //   });
  // }, []);

  const submitFunc = () => {
    Axios.post("http://localhost:3001/insert", {
      studentName: name,
      rollNo: roll,
    }).then(() => {
      console.log("Successfully inserted.");
    });
  };

  const studentListMap = studentList.map((val) => {
    return <h1>Student Name: {val.Tables_in_namesdb}</h1>;
  });

  return (
    <div className="App">
      <Container>
        <MainPage />
        {/* <Navbar bg="light" variant="light">
          <Nav className="mr-auto">
            <LinkContainer to="/project_details">
              <Nav.Link>Project</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/syllabic_count">
              <Nav.Link>Syllabic Complexity</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/migration">
              <Nav.Link>Migration</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/gdp">
              <Nav.Link>GDP</Nav.Link>
            </LinkContainer>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-primary">Search</Button>
          </Form>
        </Navbar> */}
      </Container>

      {/* <h1>CRUD APPLICATION</h1>
      <div className="form">
        <label>Student name</label>
        <input
          type="text"
          name="name"
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <label>Roll number</label>
        <input
          type="text"
          name="roll"
          onChange={(e) => {
            setRoll(e.target.value);
          }}
        />

        <button onClick={submitFunc}> Submit </button>

        {studentListMap}
      </div> */}
    </div>
  );
}

export default App;
