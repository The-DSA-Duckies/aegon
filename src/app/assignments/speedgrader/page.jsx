"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Paper from "@mui/material/Paper";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import ExitToAppIcon from "@mui/icons-material/ExitToApp";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import MultipleSelect from "../../ui/studentSelector";

const GradescopeCourseID = {
  Fa23: 576143,
  Sp24: 695053,
};

const GradescopeProject2ID = {
  Fa23: 3089460,
  Sp24: 3866728,
};

// const studentIDs = {
//   Fa23: [204884010, 206666694, 207287544, 208447816],
//   Sp24: [240225103],
// };

const StudentCodeReport = React.memo(function StudentCodeReport(props) {
  console.log("Rerendering StudentCodeReport");
  if (props.page === 0) {
    if (props.currCodeFile === "") {
      return (
        <Typography
          variant="h5"
          sx={{
            marginTop: "10em",
            marginLeft: "0.5em",
          }}
        >
          To get started, select a student from the Gradescope Student ID
          dropdown.
        </Typography>
      );
    }

    return (
      <SyntaxHighlighter
        language="cpp"
        style={oneLight}
        showLineNumbers
        wrapLongLines
      >
        {props.currCodeFile}
      </SyntaxHighlighter>
    );
  } else if (props.page === 1) {
    if (props.report === "") {
      return (
        <Typography
          variant="h5"
          sx={{
            marginTop: "10em",
            marginLeft: "0.5em",
          }}
        >
          To get started, select a student from the Gradescope Student ID
          dropdown.
        </Typography>
      );
    }

    return (
      <Typography
        sx={{
          marginLeft: "1em",
          marginRight: "1em",
          whiteSpace: "pre-wrap",
        }}
      >
        {props.report}
      </Typography>
    );
  }
});

const comparator = (a, b) => {
  if (a["studentid_ta"] > b["studentid_ta"]) return 1;
  else if (a["studentid_ta"] < b["studentid_ta"]) return -1;
  else return 0;
};

export default function Page() {
  const [studentID, setStudentID] = React.useState(-1);
  const [studentIDs, setStudentIDs] = React.useState([]);
  const [submissionData, setSubmissionData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [points, setPoints] = React.useState("");
  const [maxPoints, setMaxPoints] = React.useState(30);
  const [feedback, setFeedback] = React.useState("Comments");
  const [code, setCode] = React.useState("");
  const [report, setReport] = React.useState("");
  const [page, setPage] = React.useState(0);
  let [selectedCodeFile, setSelectedCodeFile] = React.useState("");
  let codeFileContents = [""];
  let codeFileNames = [""];
  let currCodeFile = "";

  const getSubmissionIDs = async () => {
    const id_uri = "http://localhost:4000/submissions";
    const response = await fetch(id_uri);
    const data = await response.json();
    data.sort(comparator);
    setSubmissionData(data);
    let tempIDs = [];
    for (let value of submissionData) {
      tempIDs.push(value["student_id"]);
    }
    setStudentIDs(tempIDs);
  };

  React.useEffect(() => {
    getSubmissionIDs();
  }, [studentIDs]);

  const handleUploadSubmission = async () => {
    // Send in edited feedback
    const formData = { feedback: feedback, grade: points };
    // const uri =
    //   "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
    //   studentID;

    const uri = "http://localhost:4000/submissions?student_id=" + studentID;

    const response = await fetch(uri, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });
    // const data = await response.json();
    // console.log(data);
  };

  const handlePageChange = (event, value) => {
    setPage(value);
  };

  const handlePointsChange = (event) => {
    const regex = /^-?\d{0,2}\.?\d{0,2}$/;
    if (regex.test(event.target.value)) {
      if (
        event.target.value === "" ||
        event.target.value === "-" ||
        (parseFloat(event.target.value) <= 30.0 &&
          parseFloat(event.target.value) >= -25.0)
      ) {
        setPoints(event.target.value);
      }
    }
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
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

    if (selectedCodeFile == "") {
      selectedCodeFile = codeFileNames[0];
    }
    currCodeFile = getCodeFile();
    return true;
  };

  const getCodeFile = () => {
    const codeFileIndex = codeFileNames.indexOf(selectedCodeFile);
    return codeFileContents[codeFileIndex];
  };

  const gotoGradescope = () => {
    const gradescopeLink =
      "https://www.gradescope.com/courses/" +
      GradescopeCourseID["Sp24"] +
      "/assignments/" +
      GradescopeProject2ID["Sp24"] +
      "/submissions/" +
      studentID +
      "?view=files";

    window.open(gradescopeLink, "_blank");
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "calc(100vw - 65px)",
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
              fontWeight: "bold",
              color: "#1c65ee",
            }}
          >
            Project 2
          </Typography>
          {page === 0 && code != "" && parseCode() && (
            <Select
              value={selectedCodeFile}
              onChange={handleCodeFileChange}
              variant="outlined"
              style={{ marginTop: "1em" }}
            >
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
              width: "90%",
            }}
            style={{ minHeight: "90%", maxHeight: "90%", overflow: "auto" }}
          >
            <StudentCodeReport
              page={page}
              currCodeFile={currCodeFile}
              report={report}
            />
          </Paper>
          {studentID != -1 && (
            <Tabs
              value={page}
              onChange={handlePageChange}
              variant="outlined"
              sx={{
                paddingTop: "20px",
                width: "50%",
              }}
            >
              <Tab
                label="Code"
                sx={{
                  flexGrow: 1,
                }}
              />
              <Tab
                label="Report"
                sx={{
                  flexGrow: 1,
                }}
              />
            </Tabs>
          )}
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
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            <MultipleSelect
              setStudentID={setStudentID}
              studentIDs={studentIDs}
              setFeedback={setFeedback}
              setCode={setCode}
              setReport={setReport}
              setPoints={setPoints}
              setSelectedCodeFile={setSelectedCodeFile}
            />
            {studentID.toString().length == 9 && (
              <Button
                onClick={gotoGradescope}
                sx={{
                  fontSize: "0.85rem",
                  padding: "0.25em 0.5em",
                  color: "white",
                  backgroundColor: "#fbac13",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#fbac13" },
                  gap: "5px",
                }}
              >
                Gradescope <ExitToAppIcon />
              </Button>
            )}
          </Box>
          <TextField
            value={points}
            onChange={handlePointsChange}
            label="Points"
            variant="outlined"
            helperText={"out of " + maxPoints}
            FormHelperTextProps={{ sx: { fontSize: "1rem" } }}
            sx={{ width: "100px" }}
          />
          <TextField
            variant="outlined"
            label="Comments"
            multiline
            rows={20}
            value={feedback}
            onChange={handleFeedbackChange}
            fullWidth
          />
          <Button
            onClick={handleUploadSubmission}
            sx={{
              fontSize: "1.5rem",
              padding: "0.25em 0.5em",
              color: "white",
              backgroundColor: "#1c65ee",
              whiteSpace: "nowrap",
              fontWeight: "bold",
              "&:hover": { backgroundColor: "#1c65ee" },
            }}
          >
            Update Submission
          </Button>
        </Box>
      </Box>
    </Box>
  );
}
