"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Select from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';
import { Prism as SyntaxHighlighter} from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import MultipleSelect from "../../ui/studentSelector";

const nameID = {
  "Oliver Hansen": 204884010,
  "Van Henry": 206666694,
  "April Tucker": 207287544,
  "Ralph Hubbard": 208447816,
};

export default function Page() {
  const [personName, setPersonName] = React.useState("");
  const [personID, setPersonID] = React.useState("");
  const [points, setPoints] = React.useState("");
  const [maxPoints, setMaxPoints] = React.useState(30);
  const [feedback, setFeedback] = React.useState("Comments");
  const [editedFeedback, setEditedFeedback] = React.useState("");
  const [code, setCode] = React.useState("");
  const [report, setReport] = React.useState("");
  const [page, setPage] = React.useState(0);
  const [selectedCodeFile, setSelectedCodeFile] = React.useState("");
  let codeFileContents = [""];
  let codeFileNames = [""];

  const handlePageChange = async (event, value) => {
    setPage(value);
  };

  const handlePointsChange = async (event) => {
    const regex = /^-?\d{0,2}\.?\d{0,2}$/;
    if (regex.test(event.target.value)) {
      if (event.target.value === "" || event.target.value === "-" || (parseFloat(event.target.value) <= 30.00 && parseFloat(event.target.value) >= -25.00)) {
        setPoints(event.target.value);
      }
    }
  };

  const handleFeedbackChange = async (event) => {
    setEditedFeedback(event.target.value);
  };

  const handleCodeFileChange = (event) => {
    setSelectedCodeFile(event.target.value);
  };

  const parseCode = () => {
    codeFileContents = [""];
    codeFileNames = [""];

    codeFileContents = code.split("CUR FILE == ");
    codeFileContents.shift();

    for (let i = 0; i < codeFileContents.length; i++) {
      const indexOfNewline = codeFileContents[i].indexOf("\n");
      codeFileNames.push(codeFileContents[i].substring(0, indexOfNewline));
      codeFileContents[i] = codeFileContents[i].substring(indexOfNewline + 1);
    }
    codeFileNames.shift();
    return true;
  };

  const getCodeFile = () => {
    const codeFileIndex = codeFileNames.indexOf(selectedCodeFile);
    return codeFileContents[codeFileIndex];
  };

  const renderPage = () => {
    if (page === 0) {
      if (code === "") {
        return (
          <Typography
            variant="h5"
            sx={{
              marginTop: '10em',
              marginLeft: '0.5em'
            }}
          >
            To get started, select a student from the Name dropdown.
          </Typography>
        );
      }

      parseCode();
      const codeFileContent = getCodeFile();
      return (
        <SyntaxHighlighter 
          language="cpp"
          style={oneLight}
          showLineNumbers
          wrapLongLines
        >
          {codeFileContent}
        </SyntaxHighlighter>
      );
    } else if (page === 1) {
      if (report === "") {
        return (
          <Typography
            variant="h5"
            sx={{
              marginTop: '10em',
              marginLeft: '0.5em'
            }}
          >
            To get started, select a student from the Name dropdown.
          </Typography>
        );
      }

      return (
        <Typography
          sx={{
            marginLeft: '1em',
            marginRight: '1em',
            whiteSpace: 'pre-wrap'
          }}
        >
          {report}
        </Typography>
      );
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: 'calc(100vw - 65px)'
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          height: "100%",
          width: "70%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "15%",
          }}
        >
          <Typography
            variant="h3"
            sx={{
              fontWeight: 'bold',
              color: '#1c65ee'
            }}
          >
            Project 2
          </Typography>
          {page === 0 && code != "" && parseCode() && (
            <Select
              value={selectedCodeFile}
              onChange={handleCodeFileChange}
              variant="outlined"
              displayEmpty
              style={{ marginTop: '1em'}}
            >
              <MenuItem value="">Select a code file</MenuItem>
              {codeFileNames.map((codeFile) => (
                <MenuItem key={codeFile} value={codeFile}>
                  {codeFile}
                </MenuItem>
              ))}
            </Select>
          )}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "80%",
            width: "100%",
          }}
        >
          <Paper
            elevation={3}
            sx={{
              width: "90%"
            }}
            style={{ minHeight: '90%', maxHeight: '90%', overflow: "auto" }}
          >
            {renderPage()}
          </Paper>
          <Tabs
            value={page}
            onChange={handlePageChange}
            variant="outlined"
            sx={{
              paddingTop: "20px",
              width: "50%"
            }}
          >
            <Tab
              label="Code"
              sx={{
                flexGrow: 1
              }}
            />
            <Tab
              label="Report"
              sx={{
                flexGrow: 1
              }}
            />
          </Tabs>
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "28%",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "60%",
            width: "100%",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: "2em",
            alignItems: "flex-start",
            gap: "25px",
          }}
        >
          <MultipleSelect
            personName={personName}
            setPersonName={setPersonName}
            personID={personID}
            setPersonID={setPersonID}
            nameID={nameID}
            setFeedback={setFeedback}
            setEditedFeedback={setEditedFeedback}
            setCode={setCode}
            setSelectedCodeFile={setSelectedCodeFile}
            setReport={setReport}
            setPoints={setPoints}
          />
          <TextField
            value={points}
            onChange={handlePointsChange}
            label="Points"
            variant="outlined"
            helperText={"out of "+ maxPoints}
            FormHelperTextProps={{ sx: {fontSize: '1rem'} }}
            sx={{ width: "100px" }}
          />
          <TextField
            variant="outlined"
            label="Comments"
            multiline
            rows={20}
            value={editedFeedback}
            onChange={handleFeedbackChange}
            fullWidth
          />
          <Button
            sx={{
              fontSize: '1.5rem',
              padding: '0.25em 0.5em',
              color: 'white',
              backgroundColor: '#1c65ee',
              whiteSpace: 'nowrap',
              fontWeight: 'bold',
              '&:hover': { backgroundColor: '#1c65ee'}
            }}
          >
            Update Submission
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
