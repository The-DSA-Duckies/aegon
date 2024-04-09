import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";
import Topbar from "./ui/topbar"

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guppie Grader",
  description: "LLM grading for DSA TAs"
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}

export function TopBarLayout({ children}) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <Topbar />
        <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
      </body>
    </html>
  );
}