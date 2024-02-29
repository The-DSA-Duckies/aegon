import MuiDrawer from "@mui/material/Drawer"


export default function Layout({ children }) {
  return (
    <div>
        <h1>Layout for assignments</h1>
        <div>{children}</div>
    </div>
  );
}