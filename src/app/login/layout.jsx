import Topbar from "../ui/topbar";

export default function Layout({ children }) {
  return (
    <div>
      <Topbar>{children}</Topbar>
    </div>
  );
}
