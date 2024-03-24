"use client";
import * as React from "react";
import logo from "../../../public/guppy_logo.png";
import { styled, useTheme } from "@mui/material/styles";
import Box from "@mui/material/Box";
import List from "@mui/material/List";
import MuiDrawer from "@mui/material/Drawer";
import CssBaseline from "@mui/material/CssBaseline";
import IconButton from "@mui/material/IconButton";
import MenuIcon from "@mui/icons-material/Menu";
import MenuOpenIcon from "@mui/icons-material/MenuOpen";
import AssignmentIcon from "@mui/icons-material/Assignment";
import AddCircleRoundedIcon from "@mui/icons-material/AddCircleRounded";
import InfoOutlinedIcon from "@mui/icons-material/InfoOutlined";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";

const drawerWidth = 240;

const openedMixin = (theme) => ({
  width: drawerWidth,
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: "hidden",
});

const closedMixin = (theme) => ({
  transition: theme.transitions.create("width", {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: "hidden",
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up("sm")]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled("div")(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "flex-end",
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: (prop) => prop !== "open",
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: "nowrap",
  boxSizing: "border-box",
  ...(open && {
    ...openedMixin(theme),
    "& .MuiDrawer-paper": openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    "& .MuiDrawer-paper": closedMixin(theme),
  }),
}));

export default function Sidebar(props) {
  const theme = useTheme();
  const [open, setOpen] = React.useState(false);

  const handleDrawerAction = () => {
    setOpen(!open);
  };

  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open} anchor="left">
        {open ? (
          <DrawerHeader>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton>
                <img
                  src="/guppy_logo.png"
                  alt="Logo"
                  width="48px"
                  height="48px"
                />
              </IconButton>
              <h4 style={{ margin: "auto 0" }}>Guppy Grader</h4>
              <IconButton onClick={handleDrawerAction} sx={{ color: "black" }}>
                <MenuOpenIcon />
              </IconButton>
            </Stack>
          </DrawerHeader>
        ) : (
          <DrawerHeader sx={{ padding: 0 }}>
            <Stack direction="column" alignItems="center">
              <IconButton>
                <img
                  src="/guppy_logo.png"
                  alt="Logo"
                  width="48px"
                  height="48px"
                />
              </IconButton>
              <IconButton onClick={handleDrawerAction} sx={{ color: "black" }}>
                <MenuIcon />
              </IconButton>
            </Stack>
          </DrawerHeader>
        )}
        <Divider />
        {/*Assignments */}
        <List>
          <ListItem
            key={"Assignments"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <AssignmentIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Assignments"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
          {["Assignment 1", "Assignment 2", "Assignment 3", "Assignment 4"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  sx={{
                    minHeight: 48,
                    justifyContent: open ? "initial" : "center",
                    px: 2.5,
                  }}
                >
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 3 : "auto",
                      justifyContent: "center",
                      opacity: 0,
                    }}
                  >
                    <AssignmentIcon />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: "black",
                      ":hover": {
                        textDecoration: "underline",
                        color: "#1165EF",
                        fontWeight: "bold",
                      },
                    }}
                  />
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      mr: open ? 1 : "auto",
                      justifyContent: "center",
                      opacity: open ? 1 : 0,
                      color: "#1165EF",
                    }}
                  >
                    <ArrowForwardIcon />
                  </ListItemIcon>
                </ListItemButton>
              </ListItem>
            )
          )}
        </List>

        <Box sx={{ flexGrow: 1 }} />
        {/*Create Assignment*/}
        <List>
          <ListItem
            key={"Create Assignment"}
            disablePadding
            sx={{ display: "block" }}
          >
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "#1165EF",
                }}
              >
                <AddCircleRoundedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Create Assignment"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
          {/*About us*/}
          <ListItem key={"About us"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <InfoOutlinedIcon />
              </ListItemIcon>
              <ListItemText
                primary={"About us"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
        {/* Profile Page */}
        <List>
          <ListItem key={"Profile"} disablePadding sx={{ display: "block" }}>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center",
                  color: "black",
                }}
              >
                <AccountCircleIcon />
              </ListItemIcon>
              <ListItemText
                primary={"Your Profile"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
        </List>
      </Drawer>
      <Box component="main">{props.children}</Box>
    </Box>
  );
}

/**      <Drawer variant="permanent" open={open} sx={{ justifyContent: "center" }}>
        <DrawerHeader>
          <div height="70px">
            <img src="./guppy_logo.png" alt="Logo" height="100%" width="100%" />
          </div>
          {open && <h3>Guppy Grader</h3>}
          <IconButton
            color="inherit"
            aria-label="open drawer"
            onClick={handleDrawerOpen}
          >
            {open ? <MenuOpenIcon /> : <MenuIcon />}
          </IconButton>
        </DrawerHeader>
        <divider />
        <List>
          <ListItem>
            <ListItemButton
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5,
              }}
            >
              <ListItemIcon>
                <AssignmentIcon />
              </ListItemIcon>
              {open && <h4>Assignments</h4>}
            </ListItemButton>
          </ListItem>
        </List>
        <Box sx={{ flexGrow: 1 }} />
        <List>
          <ListItem>
            {!open && (
              <ListItemButton>
                <ListItemIcon sx={{ color: "blue" }}>
                  <AddCircleRoundedIcon />
                </ListItemIcon>
              </ListItemButton>
            )}
            {open && (
              <ListItemButton
                sx={{
                  height: "40rm",
                  backgroundColor: "blue",
                  borderRadius: "20%",
                }}
              >
                <h4>Create Assignment</h4>
              </ListItemButton>
            )}
          </ListItem>
          <ListItem>
            <ListItemButton>
              <ListItemIcon>
                <InfoOutlinedIcon />
              </ListItemIcon>
              {open && <h4>About us</h4>}
            </ListItemButton>
          </ListItem>
        </List>
        <Divider />
      </Drawer> */
