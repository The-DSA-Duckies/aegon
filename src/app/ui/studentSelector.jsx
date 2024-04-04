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
    name = event.target.value;
    props.setPersonName(name);
    props.setPersonID(props.nameID[props.personName]);
    // const uri =
    //   "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
    //   props.nameID[name];
    const uri = "http://localhost:4000/submissions?student_id=" + studentID;
    const response = await fetch(uri);
    const data = await response.json();

    let feedback = "";
    if (data[0]["editedFeedback"] == undefined) {
      feedback = data[0]["feedback"];
    } else {
      feedback = data[0]["editedFeedback"];
    }
    // const feedback = data[0]["feedback"];
    props.setFeedback(feedback);
    props.setEditedFeedback(feedback);
    props.setReport(data[0]["report"]);
    props.setCode(data[0]["code"]);
    props.setSelectedCodeFile("");

    let originalScore = feedback.substring(feedback.indexOf("Score: "));
    originalScore = originalScore.substring(7, originalScore.length - 3);
    props.setPoints(parseFloat(originalScore));
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
          value={props.personName}
          onChange={handleChange}
          input={<OutlinedInput label="Gradescope Student ID" />}
        >
          {props.studentIDs["Fa23"].map((studentID) => (
            <MenuItem
              key={studentID}
              value={studentID}
              // style={getStyles(name, props.personName, theme)}
            >
              {studentID}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
