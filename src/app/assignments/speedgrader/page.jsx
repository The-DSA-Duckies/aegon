"use client";
import * as React from "react";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import MultipleSelect from "../../ui/studentSelector";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";

const nameID = {
  "Oliver Hansen": 204884010,
  "Van Henry": 206666694,
  "April Tucker": 207287544,
  "Ralph Hubbard": 208447816,
};

export default function Page() {
  const [personName, setPersonName] = React.useState("");
  const [personID, setPersonID] = React.useState("");
  const [grade, setGrade] = React.useState("");
  const [feedback, setFeedback] = React.useState("");
  const [code, setCode] = React.useState("");
  const [report, setReport] = React.useState("");
  const [page, setPage] = React.useState(1);

  const handlePageChange = async (event, value) => {
    setPage(value);
  };

  const handleGradeChange = async (event) => {
    const response = await fetch("http://localhost:4000/");
    setGrade(event.target.value);
    const data = await response.json();
  };

  const renderPage = () => {
    if (page === 1) {
      return <Typography>{feedback}</Typography>;
    } else if (page === 2) {
      return <Typography>{code}</Typography>;
    } else {
      return <Typography>{report}</Typography>;
    }
  };

  return (
    <Box
      sx={{
        display: "flex",
        height: "100vh",
        width: "100vw",
      }}
    >
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          // justifyContent: "center",
          height: "100%",
          width: "70%",
          // backgroundColor: "green",
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            height: "14%",
          }}
        >
          <Box>Assignment Name</Box>
          <Box
            sx={
              {
                // paddingBottom: "20px",
              }
            }
          >
            Student Name
          </Box>
          {/* <Divider flexItem sx={{ alignSelf: "flex-end" }} /> */}
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "row",
            height: "8%",
            gap: "50px",
            width: "100%",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>12</Box>
            <Box>Comments</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>95%</Box>
            <Box>Grade</Box>
          </Box>
          <Box
            sx={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
            }}
          >
            <Box>9.5</Box>
            <Box>Points</Box>
          </Box>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
            alignItems: "center",
            height: "78%",
            width: "100%",
          }}
        >
          <Paper
            sx={{
              width: "80%",
            }}
            style={{ maxHeight: 480, overflow: "auto" }}
          >
            {renderPage()}
          </Paper>
          <Pagination
            count={3}
            page={page}
            onChange={handlePageChange}
            sx={{
              paddingTop: "20px",
            }}
          />
        </Box>
      </Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          height: "100%",
          width: "30%",
          // backgroundColor: "blue",
        }}
      >
        <Box
          sx={{
            display: "flex",
            height: "18%",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <MultipleSelect
            personName={personName}
            setPersonName={setPersonName}
            personID={personID}
            setPersonID={setPersonID}
            nameID={nameID}
            setFeedback={setFeedback}
            setCode={setCode}
            setReport={setReport}
          />
        </Box>
        <Box
          sx={{
            display: "flex",
            height: "60%",
            flexDirection: "column",
            justifyContent: "flex-start",
            paddingTop: "50px",
            alignItems: "flex-start",
            paddingLeft: "70px",
            gap: "50px",
          }}
        >
          <TextField
            onChange={handleGradeChange}
            label="Grade"
            variant="outlined"
            sx={{ width: "300px" }}
          />
          <TextField
            label="Comments"
            multiline
            rows={8}
            defaultValue=""
            sx={{ width: "300px" }}
          />
          <Button variant="contained">Submit</Button>
        </Box>
      </Box>
    </Box>
  );
}
