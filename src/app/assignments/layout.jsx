import Sidebar from "../ui/sidebar";

export default function Layout({ children }) {
  return (
    <div>
        <Sidebar>{children}</Sidebar>
    </div>
  );
}