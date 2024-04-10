"use client";
import * as React from "react";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import ArrowForward from "@mui/icons-material/ArrowForward";
import ArrowBack from "@mui/icons-material/ArrowBack";

export default function MultipleSelect(props) {
  const [selectedIndex, setSelectedIndex] = React.useState(-1);

  const handleStudentChange = async (selectedStudentID) => {
    props.setStudentID(selectedStudentID);
    const uri =
      "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
      selectedStudentID;
    // const uri = "http://localhost:4000/submissions?student_id=" + studentID;
    const response = await fetch(uri);
    const data = await response.json();

    if (
      data[0]["edited_feedback"] === undefined ||
      data[0]["edited_feedback"] === ""
    ) 
    {
      props.setFeedback(data[0]["feedback"]);
      props.setLastSubmittedFeedback("");
    } 
    else {
      props.setFeedback(data[0]["edited_feedback"]);
      props.setLastSubmittedFeedback(data[0]["edited_feedback"]);
    }

    if (data[0]["edited_grade"] === undefined) {
      props.setPoints(data[0]["grade"]);
      props.setLastSubmittedPoints(-30);
    }
    else {
      props.setPoints(data[0]["edited_grade"]);
      props.setLastSubmittedPoints(data[0]["edited_grade"]);
    }

    if (data[0]["graded_status"] === undefined) {
      props.setGraded(false);
    }
    else {
      props.setGraded(data[0]["graded_status"]);
    }

    if (data[0]["grade"] === null) {
      props.setOriginalPoints(0);
    }
    else {
      props.setOriginalPoints(data[0]["grade"]);
    }
    
    props.setOriginalFeedback(data[0]["feedback"]);
    props.setReport(data[0]["report"]);
    props.setCode(data[0]["code"]);
    props.setTests(data[0]["tests"])
    props.setSelectedCodeFile("");
  };

  const handleBack = () => {
    const newIndex = selectedIndex <= 0 ? props.studentIDs.length - 1 : selectedIndex - 1;
    setSelectedIndex(newIndex);
    handleStudentChange(props.studentIDs[newIndex]);
  };

  const handleFront = () => {
    const newIndex = selectedIndex === props.studentIDs.length - 1 ? 0 : selectedIndex + 1;
    setSelectedIndex(newIndex);
    handleStudentChange(props.studentIDs[newIndex]);
  };

  const handleSelect = (event) => {
    const newIndex = props.studentIDs.findIndex((studentID) => studentID === event.target.value);
    setSelectedIndex(newIndex);
    handleStudentChange(event.target.value);
  }

  return (
    <div>
      <FormControl sx={{ width: 300 }}>
        <InputLabel id="Gradescope-student-ID-label">
          Gradescope Student ID
        </InputLabel>
        <Select
          labelId="Gradescope-student-ID-label"
          id="Gradescope-student-ID-select"
          value={props.studentID}
          onChange={handleSelect}
          input={<OutlinedInput label="Gradescope Student ID" />}
        >
          {props.studentIDs.map((studentID, index) => (
            <MenuItem
              key={index}
              value={studentID}
            >
              {props.studentDict[studentID]}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
      <Tooltip
        title={selectedIndex > 0 ? "Previous Student" : "Last Student"}
        arrow
        sx={{
            color: "#0096ff",
            backgroundColor: "white",
            borderRadius: '5px',
            whiteSpace: "nowrap",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "white" },
            marginTop: "5px",
            marginLeft: "10px"
        }}
      >
        <IconButton
          onClick={handleBack}
        >
          <ArrowBack
            sx={{
              fontSize: "30px",
              
            }}
          />
        </IconButton>
      </Tooltip>
      <Tooltip
        title={(selectedIndex != -1 && selectedIndex != props.studentIDs.length - 1) ? "Next Student" : "First Student"}
        arrow
        sx={{
            color: "#0096ff",
            backgroundColor: "white",
            borderRadius: '5px',
            whiteSpace: "nowrap",
            fontWeight: "bold",
            "&:hover": { backgroundColor: "white" },
            marginTop: "5px"
        }}
      >
        <IconButton
          onClick={handleFront}
        >
          <ArrowForward
            sx={{
              fontSize: "30px",
            }}
          />
        </IconButton>
      </Tooltip>
    </div>
  );
}
