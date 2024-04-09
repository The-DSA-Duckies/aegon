"use client";
import * as React from "react";
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
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import {
  Divider,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
  Stack,
} from "@mui/material";
import { useRouter } from 'next/navigation';

const drawerWidth = 240; // // sidebar width when closed is 65px

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

  const router = useRouter(); // added based on topbar code for button click navigation

  const handleNavigate = (path) => {
    router.push(path);
  };

  return (
    <Box
      sx={{
        display: "flex",
      }}
    >
      <CssBaseline />
      <Drawer variant="permanent" open={open} anchor="left">
        {open ? (
          <DrawerHeader>
            <Stack direction="row" spacing={1} alignItems="center">
              <IconButton onClick={() => handleNavigate('/')}>
                <img
                  src="/guppy_grader.png"
                  alt="Logo"
                  width="48px"
                  height="48px"
                />
              </IconButton>
              <h4 style={{ margin: "0 -5px 0 0" }}>Guppie Grader</h4>
              <IconButton onClick={handleDrawerAction} sx={{ color: "black" }}>
                <MenuOpenIcon 
                  sx={{
                      fontSize: "30px",
                      color: "black"
                  }}
                />
              </IconButton>
            </Stack>
          </DrawerHeader>
        ) : (
          <DrawerHeader sx={{ padding: 0 }}>
            <Stack direction="column" alignItems="center">
              <IconButton onClick={() => handleNavigate('/')}>
                <img
                  src="/guppy_grader.png"
                  alt="Logo"
                  width="48px"
                  height="48px"
                />
              </IconButton>
              <IconButton onClick={handleDrawerAction} sx={{ color: "black", justifyContent: "center" }}>
                <MenuIcon 
                  sx={{
                      fontSize: "30px",
                      color: "black"
                  }}
                />
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
              onClick={() => handleNavigate('/assignments')}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                onClick={() => handleNavigate('/assignments')}
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <AssignmentIcon
                  sx={{
                      fontSize: "30px",
                      color: "black"
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Assignments"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
          {["Project 2"].map(
            (text, index) => (
              <ListItem key={text} disablePadding sx={{ display: "block" }}>
                <ListItemButton
                  onClick={() => handleNavigate('/assignments/speedgrader')}
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
                    <AssignmentIcon
                      sx={{
                        fontSize: "30px",
                        color: "black"
                      }}
                    />
                  </ListItemIcon>
                  <ListItemText
                    primary={text}
                    sx={{
                      opacity: open ? 1 : 0,
                      color: "black"
                    }}
                  />
                  <ListItemIcon
                    sx={{
                      minWidth: 0,
                      justifyContent: "center",
                      opacity: open ? 1 : 0
                    }}
                  >
                    <ArrowForwardIcon
                      sx={{
                        fontSize: "30px",
                        color: "#1165EF"
                      }}
                    />
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
            <ListItemButton onClick={() => handleNavigate('/assignments/create')}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <AddCircleRoundedIcon
                  sx={{
                      fontSize: "30px",
                      color: "#1165EF"
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"Create Assignment"}
                sx={{ opacity: open ? 1 : 0, color: "black" }}
              />
            </ListItemButton>
          </ListItem>
          {/*About us*/}
          <ListItem key={"About Us"} disablePadding sx={{ display: "block" }}>
            <ListItemButton onClick={() => handleNavigate('/about-us')}
              sx={{
                minHeight: 48,
                justifyContent: open ? "initial" : "center",
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <InfoOutlinedIcon 
                  sx={{
                      fontSize: "30px",
                      color: "black"
                  }}
                />
              </ListItemIcon>
              <ListItemText
                primary={"About Us"}
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
                px: 2.5
              }}
            >
              <ListItemIcon
                sx={{
                  minWidth: 0,
                  mr: open ? 3 : "auto",
                  justifyContent: "center"
                }}
              >
                <AccountCircleIcon
                  sx={{
                      fontSize: "30px",
                      color: "black"
                  }}
                />
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
