import Footer from "@/components/footer/footer";
import Navbar from "../components/navbar/navbar";
import "./globals.css";
import { Inter, Roboto } from "next/font/google";
import { ThemeProvider } from "../../context/themeContext";

const roboto = Roboto({
  weight: ["100", "300", "400", "500", "700", "900"],
  subsets: ["latin"],
});

export const metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={roboto.className}>
        <ThemeProvider>
          <div className=" max-w-[1366px] min-h-screen m-auto px-10 py-4 flex flex-col justify-between">
            <Navbar />
            {children}
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
