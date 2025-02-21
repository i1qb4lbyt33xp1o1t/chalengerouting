import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css"; // Pastikan path benar
import Navbar from "../components/Navbar"; // Sesuaikan path jika ada di dalam /app

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "My Portfolio",
  description: "Portfolio website using Next.js",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
        <Navbar /> {/* Navbar muncul di setiap halaman */}
        <main className="mt-16">{children}</main> {/* Tambahkan margin agar konten tidak tertutup navbar */}
      </body>
    </html>
  );
}
