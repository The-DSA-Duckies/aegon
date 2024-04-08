"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

export default function MultipleSelect(props) {
  const theme = useTheme();

  const handleChange = async (event) => {
    //TODO: This is so broken right now
    const studentID = event.target.value;
    props.setStudentID(studentID);
    const uri =
      "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
      studentID;
    // const uri = "http://localhost:4000/submissions?student_id=" + studentID;
    const response = await fetch(uri);
    const data = await response.json();

    let feedback = "";
    if (
      data[0]["edited_feedback"] === undefined ||
      data[0]["edited_feedback"] === ""
    ) 
    {
      feedback = data[0]["feedback"];
    } 
    else {
      feedback = data[0]["edited_feedback"];
    }
    
    props.setFeedback(feedback);
    props.setReport(data[0]["report"]);
    props.setCode(data[0]["code"]);
    props.setTests(data[0]["tests"])
    props.setSelectedCodeFile("");
    let points = 0;
    if (data[0]["edited_grade"] === undefined) {
      points = data[0]["grade"];
      props.setGraded(false);
    }
    else {
      points = data[0]["edited_grade"];
      props.setGraded(true);
    }
    props.setPoints(points);
  };

  return (
    <div>
      <FormControl sx={{ width: 250 }}>
        <InputLabel id="Gradescope-student-ID-label">
          Gradescope Student ID
        </InputLabel>
        <Select
          labelId="Gradescope-student-ID-label"
          id="Gradescope-student-ID-select"
          // value={props.personName}
          onChange={handleChange}
          input={<OutlinedInput label="Gradescope Student ID" />}
        >
          {props.studentIDs.map((studentID) => (
            <MenuItem
              key={studentID}
              value={studentID}
              // style={getStyles(name, props.personName, theme)}
            >
              {props.studentDict[studentID]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
