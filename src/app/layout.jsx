import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Guppie Graders",
  description: "Automatic grading for DSA TAs",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
            <AppRouterCacheProvider>
              {children}
            </AppRouterCacheProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}