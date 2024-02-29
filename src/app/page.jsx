import Link from "next/link";
import { Button } from "@mui/material";

export default function Home() {
  return (
    <main>
      <Button>Press Me</Button>
      <Link href="assignments">Assignments</Link>
      <Link href="assignments/individual">Individual Assignment</Link>
      <Link href="assignments/speedgrader">Speedgrader</Link>
    </main>
  );
}
