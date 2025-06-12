import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export const metadata = {
  title: "TP2 - Movies",
  description: "With love from Maimo",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="bg-gray-900">
        <Navbar/>
        {children}
        <Footer/>
      </body>
    </html>
  );
}
