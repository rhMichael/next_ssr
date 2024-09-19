import Head from "next/head";
import Image from "next/image";
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <form method="GET" action="/submit">
        <label>Name</label>
        <input type="text" placeholder="Enter your name" name="name" required />
        <br />

        <label>Age</label>
        <input type="text" placeholder="Enter your age" name="age" required />
        <br />
        
        <label>City</label>
        <input type="text" placeholder="Enter your city" name="city" required />
        <br />
        
        <button type="submit">Submit</button>
      </form>
    </>
  );
}
