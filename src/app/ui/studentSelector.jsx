"use client";
import * as React from "react";
import { useTheme } from "@mui/material/styles";
import OutlinedInput from "@mui/material/OutlinedInput";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";

const names = ["Oliver Hansen", "Van Henry", "April Tucker", "Ralph Hubbard"];

function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

export default function MultipleSelect(props) {
  const theme = useTheme();

  const handleChange = async (event) => {
    name = event.target.value;
    props.setPersonName(name);
    props.setPersonID(props.nameID[props.personName]);
    // const uri =
    //   "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
    //   props.nameID[name];
    const uri =
      "http://localhost:4000/submissions?student_id=" + props.nameID[name];
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
        <InputLabel id="demo-multiple-name-label">Name</InputLabel>
        <Select
          labelId="demo-multiple-name-label"
          id="demo-multiple-name"
          value={props.personName}
          onChange={handleChange}
          input={<OutlinedInput label="Name" />}
        >
          {names.map((name) => (
            <MenuItem
              key={name}
              value={name}
              style={getStyles(name, props.personName, theme)}
            >
              {name}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}
