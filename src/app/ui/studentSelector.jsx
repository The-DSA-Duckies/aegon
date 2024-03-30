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
    const uri =
      "http://localhost:4000/submissions?student_id=" + props.nameID[name];
    const response = await fetch(uri);
    const data = await response.json();
    props.setFeedback(data[0]["feedback"]);
    props.setReport(data[0]["report"]);
    props.setCode(data[0]["code"]);
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
