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
import CheckBoxOutlineBlankOutlined from "@mui/icons-material/CheckBoxOutlineBlankOutlined";
import CheckBoxOutlined from "@mui/icons-material/CheckBoxOutlined";
import RestorePageOutlined from "@mui/icons-material/RestorePageOutlined";
import { Prism as SyntaxHighlighter } from "react-syntax-highlighter";
import { oneLight } from "react-syntax-highlighter/dist/esm/styles/prism";
import { styled } from "@mui/material/styles";
import Tooltip from "@mui/material/Tooltip";
import IconButton from "@mui/material/IconButton";
import MultipleSelect from "../../ui/studentSelector";

const VerticalDivider = styled("div")({
  borderLeft: "1px solid #e7e7e7", // Adjust border color as needed
  height: "100%", // Ensure divider spans the full height of the parent container
  margin: "0 25px 0 -25px", // Adjust margin as needed
});

const GradescopeCourseID = {
  Fa23: 576143,
  Sp24: 695053,
};

const GradescopeProject2ID = {
  Fa23: 3089460,
  Sp24: 3866728,
};

const StudentCodeReport = React.memo(function StudentCodeReport(props) {
  if (props.page === 0) {
    if (props.currCodeFile === "") {
      return (
        <div>
          <img
            sx={{
              textAlign: "center",
              width: "100%",
              display: "block",
              margin: "auto",
            }}
            src="/empty_pond.png"
            alt="Logo"
            style={{
              margin: "auto",
              display: "flex",
              alignItems: "center",
              width: "50%",
              height: "50%",
              padding: "0px",
            }}
          />
          <Typography
            variant="h5"
            sx={{
              marginLeft: "0.5em",
              textAlign: "center",
            }}
          >
            This page is <strong>ducking</strong> empty! <br />
            Time to dive in by selecting a <strong>student ID</strong> :D
            {/*No ducks in our pond just yet! <br /> Select a
            <strong> student ID</strong> in the dropdown to find your flock.*/}
          </Typography>
        </div>
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
  const [studentDict, setStudentDict] = React.useState({});
  const [submissionData, setSubmissionData] = React.useState([]);
  const [index, setIndex] = React.useState(0);
  const [points, setPoints] = React.useState("");
  const [originalPoints, setOriginalPoints] = React.useState(0);
  const [maxPoints, setMaxPoints] = React.useState(30);
  const [feedback, setFeedback] = React.useState("Comments");
  const [originalFeedback, setOriginalFeedback] = React.useState("");
  const [code, setCode] = React.useState("");
  const [report, setReport] = React.useState("");
  const [tests, setTests] = React.useState("")
  const [page, setPage] = React.useState(0);
  const [gotSubmissions, setGotSubmissions] = React.useState(false);
  const [graded, setGraded] = React.useState(false);
  const [lastSubmittedFeedback, setLastSubmittedFeedback] = React.useState("");
  const [lastSubmittedPoints, setLastSubmittedPoints] = React.useState(-30);
  let [selectedCodeFile, setSelectedCodeFile] = React.useState("");
  let codeFileContents = [""];
  let codeFileNames = [""];
  let currCodeFile = "";

  const getSubmissionIDs = async () => {
    // const id_uri = "http://localhost:4000/submissions";
    const id_uri =
      "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions";
    const response = await fetch(id_uri);
    const data = await response.json();
    data.sort(comparator);
    setSubmissionData(data);
    let tempIDs = [];
    let dataDict = {};
    for (let value of submissionData) {
      tempIDs.push(value["student_id"]);
      dataDict[value["student_id"]] = value["studentid_ta"];
    }
    setStudentIDs(tempIDs);
    setStudentDict(dataDict);
    setGotSubmissions(true);
  };

  React.useEffect(() => {
    getSubmissionIDs();
  }, [gotSubmissions]);

  const handleUploadSubmission = async () => {
    // make sure points is a number
    if (!Number.isNaN(points)) {
      // Send in edited feedback
      setGraded(true);
      const formData = { feedback: feedback, grade: parseFloat(points), graded: true }; // convert points to float
      const uri =
        "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
        studentID;

      // const uri = "http://localhost:4000/submissions?student_id=" + studentID;

      const response = await fetch(uri, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (!response.ok) {
        setGraded(false);
      }
      else {
        setLastSubmittedFeedback(feedback);
        setLastSubmittedPoints(points);
      }
    }
  };

  const revertChanges = async () => {
    if (!Number.isNaN(points)) {
      // Send in edited feedback
      const formData = { feedback: originalFeedback, grade: parseFloat(originalPoints), graded: false }; // convert points to float
      const uri =
        "https://shielded-fortress-17570-3a3570bb5dfa.herokuapp.com/submissions?student_id=" +
        studentID;

      // const uri = "http://localhost:4000/submissions?student_id=" + studentID;

      const response = await fetch(uri, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });
      
      if (response.ok) {
        setGraded(false);
        setFeedback(originalFeedback);
        setPoints(originalPoints);
        setLastSubmittedFeedback(originalFeedback);
        setLastSubmittedPoints(originalPoints);
      }
    }
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
        if (lastSubmittedFeedback != "" &&
          feedback === lastSubmittedFeedback &&
          parseFloat(event.target.value).toFixed(2) == parseFloat(lastSubmittedPoints).toFixed(2)
        ) {
          setGraded(true);
        }
        else {
          setGraded(false);
        }
      }
    }
  };

  const handleFeedbackChange = (event) => {
    setFeedback(event.target.value);
    if (lastSubmittedFeedback != "" &&
      event.target.value === lastSubmittedFeedback &&
      parseFloat(points).toFixed(2) == parseFloat(lastSubmittedPoints).toFixed(2)
    ) {
      setGraded(true);
    }
    else {
      setGraded(false);
    }
  };

  const handleCodeFileChange = (event) => {
    setSelectedCodeFile(event.target.value);
  };

  const parseCode = () => {
    codeFileContents = [""];
    codeFileNames = [""];

    if (code != "NO CODE FOUND") {
      codeFileContents = code.split("CUR FILE == ");
      codeFileContents.shift(); // take out empty entry

      for (let i = 0; i < codeFileContents.length; i++) { // adds normal code files
        const indexOfNewline = codeFileContents[i].indexOf("\n");
        codeFileNames.push(codeFileContents[i].substring(0, indexOfNewline));
        codeFileContents[i] = codeFileContents[i].substring(indexOfNewline + 1);
      }

      codeFileNames.shift(); // take out empty entry
    }

    // adds test.cpp
    if (tests != "NO TESTS FOUND") {
      codeFileNames.push("test.cpp");
      codeFileContents.push(tests)
    }

    if (selectedCodeFile == "") {
      selectedCodeFile = codeFileNames[0];
    }
    currCodeFile = getCodeFile();

    if (currCodeFile === "// NO CODE FOUND") {
      return false;
    }
    else {
      return true;
    }
  };

  const getCodeFile = () => {
    if (codeFileNames[0] === "") {
      return "// NO CODE FOUND";
    }

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
          {page === 0 && (code != "" || tests != "") && parseCode() && (
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
      <VerticalDivider/>
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
              studentDict={studentDict}
              setFeedback={setFeedback}
              setOriginalFeedback={setOriginalFeedback}
              setLastSubmittedFeedback={setLastSubmittedFeedback}
              setCode={setCode}
              setReport={setReport}
              setTests={setTests}
              setPoints={setPoints}
              setOriginalPoints={setOriginalPoints}
              setLastSubmittedPoints={setLastSubmittedPoints}
              setSelectedCodeFile={setSelectedCodeFile}
              setGraded={setGraded}
            />
            {studentID.toString().length == 9 && (
              <Tooltip
                title="Open in Gradescope"
                arrow
                sx={{
                    fontSize: "0.7rem",
                    padding: "0.15em 0.4em",
                    color: "#0096ff",
                    backgroundColor: "white",
                    borderRadius: '5px',
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "white" },
                    gap: "5px",
                    border: "3px solid #0096ff"
                }}
              >
                <IconButton
                  onClick={gotoGradescope}
                >
                  <ExitToAppIcon
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {studentID != -1 && (
              <TextField
                value={points}
                onChange={handlePointsChange}
                label="Points"
                variant="outlined"
                helperText={"out of " + maxPoints}
                FormHelperTextProps={{ sx: { fontSize: "1rem" } }}
                sx={{ width: "100px" }}
              />
            )}
            {studentID != -1 && (
              graded ? (
                <Tooltip
                  title="Changes are saved!"
                  arrow
                >
                  <CheckBoxOutlined
                    sx={{
                        fontSize: "60px",
                        color: "#7af587",
                        marginBottom: "30px"
                    }}
                  />
                </Tooltip>
              ) : (
                <Tooltip
                  title="Update before exiting!"
                  arrow
                >
                  <CheckBoxOutlineBlankOutlined
                    sx={{
                        fontSize: "60px",
                        color: "#c0c0c0",
                        marginBottom: "30px"
                    }}
                  />
                </Tooltip>
              )
            )}
          </Box>
          {studentID != -1 && (
            <TextField
              variant="outlined"
              label="Comments"
              multiline
              rows={20}
              value={feedback}
              onChange={handleFeedbackChange}
              fullWidth
            />
          )}
          <Box
            sx={{
              display: "flex",
              flexDirection: "row",
              justifyContent: "flex-start",
              alignItems: "center",
              gap: "20px",
            }}
          >
            {studentID != -1 && (
              <Tooltip
                title="Revert Changes"
                arrow
                sx={{
                    fontSize: "0.7rem",
                    padding: "0.15em 0.4em",
                    color: "#FCAC12",
                    backgroundColor: "white",
                    borderRadius: '5px',
                    whiteSpace: "nowrap",
                    fontWeight: "bold",
                    "&:hover": { backgroundColor: "white" },
                    gap: "5px",
                    border: "3px solid #FCAC12"
                }}
              >
                <IconButton
                  onClick={revertChanges}
                >
                  <RestorePageOutlined
                    sx={{
                      fontSize: "40px",
                    }}
                  />
                </IconButton>
              </Tooltip>
            )}
            {studentID != -1 && (
              <Button
                onClick={handleUploadSubmission}
                sx={{
                  fontSize: "1.5rem",
                  padding: "0.25em 0.75em",
                  color: "white",
                  backgroundColor: "#1c65ee",
                  borderRadius: "5px",
                  whiteSpace: "nowrap",
                  fontWeight: "bold",
                  "&:hover": { backgroundColor: "#1c65ee" },
                  textTransform: "none",
                }}
              >
                Update Submission
              </Button>
            )}
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
