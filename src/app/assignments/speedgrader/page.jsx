import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import Paper from "@mui/material/Paper";
import Pagination from "@mui/material/Pagination";
import MultipleSelect from "../../ui/studentSelector";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

export default function Page() {
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
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
            <Box>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
              enim ad minim veniam, quis nostrud exercitation ullamco laboris
              nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in
              reprehenderit in voluptate velit esse cillum dolore eu fugiat
              nulla pariatur. Excepteur sint occaecat cupidatat non proident,
              sunt in culpa qui officia deserunt mollit anim id est laborum.
            </Box>
          </Paper>
          <Pagination
            count={10}
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
          <MultipleSelect />
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
          <TextField label="Grade" variant="outlined" sx={{ width: "300px" }} />
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
